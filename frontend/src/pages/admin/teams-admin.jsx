import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { getAllTeams, deleteATeam } from '../../api/teamAPI';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './team.css'; // Import the CSS file

const Teams = () => {
	const navigate = useNavigate();
	const [teams, setTeams] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredTeams, setFilteredTeams] = useState([]); // Holds filtered teams

	// useEffect for data fetching
	useEffect(() => {
		fetchAllTeams();
	}, []);

	useEffect(() => {
		// Initially, show all teams
		setFilteredTeams(teams);
	}, [teams]);

	// Fetch all teams
	const fetchAllTeams = async () => {
		try {
			const response = await getAllTeams();
			setTeams(response.data);
		} catch (error) {
			console.error('Error fetching teams: ', error);
		}
	};

	// Delete handler
	const handleDelete = async (teamId) => {
		try {
			const confirm = await Swal.fire({
				title: 'Are you sure?',
				text: 'You will not be able to recover this team!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, keep it',
			});

			if (confirm.isConfirmed) {
				const response = await deleteATeam(teamId);
				if (response.status === 200) {
					Swal.fire('Deleted!', 'Your team has been deleted.', 'success');
					fetchAllTeams(); // Reload the teams list after deletion
				}
			}
		} catch (error) {
			console.error('Error deleting team: ', error);
		}
	};

	// Report handler
	const reportHandler = async () => {
		const doc = new jsPDF();

		// Total teams and total players
		const totalTeams = teams.length;
		const totalPlayers = teams.reduce((acc, team) => acc + team.playerIds.length, 0);

		// Add header
		const headerTitle = 'Teams Report';
		const headerTitleX = doc.internal.pageSize.width / 2;
		doc.setFontSize(12);
		doc.text(headerTitle, headerTitleX, 10, { align: 'center' });

		// Table header and body
		doc.autoTable({
			head: [['Team Name', 'Game Name', 'Gender Group', 'Age Limit', 'Players']],
			body: teams.map((team) => [
				team.teamName,
				team.gameName === 'cricket' ? 'Cricket' : 'VolleyBall',
				team.genderGroup === 'male' ? 'Male' : 'Female',
				`${team.minAge} - ${team.maxAge}`,
				`${team.playerIds.length} / ${team.teamSize}`,
			]),
		});

		let currentY = doc.autoTable.previous.finalY + 10;

		// Summary data
		doc.text(`Total Teams: ${totalTeams}`, 14, currentY);
		doc.text(`Total Players: ${totalPlayers}`, 14, currentY + 10);

		// Save the PDF
		doc.save('teams-report.pdf');
	};

	// View handler
	const handleView = (teamId) => {
		navigate(`/team-info/${teamId}`);
	};

	// Update handler
	const handleUpdate = (teamId) => {
		navigate(`/update-team/${teamId}`);
	};

	// Search bar handler
	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value); // Update search term
	};

	// Handle search button click
	const handleSearch = () => {
		// Filter teams based on the search term
		const filtered = teams.filter((team) =>
			team.teamName.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredTeams(filtered); // Update the filtered teams
	};

	return (
		<div className='container'>
			<div>
				<button type='button' onClick={() => navigate('/add-team')} className="btn btn-primary" >
					Add a New Team
				</button>
			</div>
			<div className='d-flex my-4'>
				<h2>Team List</h2>
				<div className='search-container'>
					<input
						type='text'
						className='form-control search-bar' // Custom CSS class for styling
						placeholder='Search by Team Name'
						value={searchTerm} // Controlled input
						onChange={handleSearchChange} // Update search term
					/>
					<button
						type='button'
						className='btn btn-primary ms-2' // Search button CSS
						onClick={handleSearch}
					>
						Search
					</button>
				</div>
				<button className='btn btn-primary my-1 ms-auto' onClick={reportHandler}>
					Download Report
				</button>
			</div>
			<table className='table table-striped table-hover table-bordered mb-5'>
				<thead className='text-center table-dark'>
				<tr>
						<th>Team Name</th>
						<th>Game Name</th>
						<th className='col-2'>Gender Group</th>
						<th className='col-1'>Age Limit</th>
						<th>Players</th>
						<th className='col-2'>Actions</th>
						</tr>
  </thead>
					<tbody className='align-middle'>
						{filteredTeams.map((team) => (
							<tr key={team._id}>
								<td className='ps-4'>{team.teamName}</td>
								<td className='text-center'>{team.gameName === 'cricket' ? 'Cricket' : 'VolleyBall'}</td>
								<td className='text-center'>{team.genderGroup === 'male' ? 'Male' : 'Female'}</td>
								<td className='text-center'>
									{team.minAge} - {team.maxAge}
								</td>
								<td className='text-center'>
									{team.playerIds.length} / {team.teamSize}
								</td>
								<td className='d-flex align-items-center justify-content-center'>
									<button
										type='button'
										onClick={() => handleView(team._id)}
										className='btn btn-sm btn-primary me-2'
									>
										View
									</button>
									<button
										type='button'
										onClick={() => handleUpdate(team._id)}
										className='btn btn-sm btn-secondary me-2'
									>
										Update
									</button>
									<button
										type='button'
										onClick={() => handleDelete(team._id)}
										className='btn btn-sm btn-danger'
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
			</table>
		</div>
	);
};

export default Teams;
