import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const StyledTable = styled(Table)({
  minWidth: 500
});

const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: 'bold',
  color: '#E32845',
  fontSize: 14
}));

const ListCommande = () => {
  const [commandes, setCommandes] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:8005/SpringMVC/Etudiant');
        // console.log(response.data.results.bindings);
        setCommandes(response.data.results.bindings);
        setIsLoading(false);
        setError('');
      } catch (error) {
        console.error('Error fetching commandes list:', error);
        setError('Failed to fetch commandes list. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchCommandes();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>etudiant</StyledTableCell>
            <StyledTableCell>Etablissement</StyledTableCell>
            <StyledTableCell>matiere</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Prenom</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <StyledTableCell colSpan={5}>Chargement...</StyledTableCell>
            </TableRow>
          ) : (
            commandes.map((commande, index) => (
              <TableRow key={index}>
                <TableCell>{commande.etudiant.value}</TableCell>
                <TableCell>{commande.Etablissement.value}</TableCell>
                <TableCell>{commande.matiere.value}</TableCell>
                <TableCell>{commande.name.value}</TableCell>
                <TableCell>{commande.Prenom.value}</TableCell>
                <TableCell>{commande.Email.value}</TableCell>
                <TableCell>{commande.date.value}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default ListCommande;
