import React, { useState, useEffect } from "react";


const LoanDetails = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Use placeholder data - in a real project, you might fetch this data
    const dummyLoans = [
      {
        id: "L28U3247",
        type: "Home Loan",
        borrower: "Sachar",
        borrowerAddress: "83 Yogi Ganj, Kadapa",
        partner: "Divit Vora",
        sanctionAmount: "₹ 1,934,068",
        region: "West"
      },
      {
        id: "L28U3243",
        type: "Car Loan",
        borrower: "Agrawal",
        borrowerAddress: "86/622, Deo Path, Berhampore",
        partner: "Mahika Tak",
        sanctionAmount: "₹ 1,842,143",
        region: "North"
      }
      // Add more dummy entries if needed
    ];
    setLoans(dummyLoans);
  }, []);

  return (
    <div id="loandetails" className="loan-details">
      <h1>Loan Details</h1>
      <table>
        <thead>
          <tr>
            <th>Loan No.</th>
            <th>Type</th>
            <th>Borrower</th>
            <th>Address</th>
            <th>Partner</th>
            <th>Sanction Amt.</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.type}</td>
              <td>{loan.borrower}</td>
              <td>{loan.borrowerAddress}</td>
              <td>{loan.partner}</td>
              <td>{loan.sanctionAmount}</td>
              <td>{loan.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanDetails;
