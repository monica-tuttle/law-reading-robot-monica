import Header from "./components/Header/Header";
import BasicTabs from "./components/BasicTabs";
import DisclosureDialog from "./components/Header/DisclosureDialog"
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./hooks/useData";
// import { supabase } from './supabaseClient';
import { createTheme } from "@mui/material";

import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Work Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
const MainAppContainer = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <DataProvider>
          <BasicTabs />
        </DataProvider>
      </ThemeProvider>
    </Router>
  );
};

//An example of how to retreive data from Supabase
//You will need to add an .env.local file with the REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY to connect to Supabase.
// function BillsFromDB () {
//   const [billsFromDB, setBillsFromDB] = useState([]);

//   async function getBillsFromDB() {
//     const { data } = await supabase.from("Bills").select();
//     setBillsFromDB(data);
//   }

//   useEffect(() => {
//     getBillsFromDB();
//   }, [])

//   return (
//       <div>
//           <h2>Bill Data From DB</h2>
//           <ul>
//           {billsFromDB.map((bill) => (
//             <li key={bill.title}><strong>Bill Title:</strong> {bill.title}</li>
//           ))}
//           </ul>
//       </div>
//   );
// }

function App() {
  return (
<<<<<<< HEAD
      <MainAppContainer/>
      
      // <Router>
      //     <div className="App">
      //         <ContainerFluidExample/>
      //
      //         <ul>
      //             {rssFiles.map(name => (
      //                 <li key={name}>
      //                     <Link to={`/${name}`}>{name}</Link>
      //                 </li>
      //             ))}
      //         </ul>
      //         <Routes>
      //             {rssFiles.map(name => (
      //                 <Route key={name} path={`/${name}`} element={<CsvTable filename={name} />} />
      //             ))}
      //         </Routes>
      //
      //         {/*<CsvTable/>*/}
      //     </div>
      // </Router>

=======
    <MainAppContainer />
    // <Router>
    //     <div className="App">
    //         <ContainerFluidExample/>
    //
    //         <ul>
    //             {rssFiles.map(name => (
    //                 <li key={name}>
    //                     <Link to={`/${name}`}>{name}</Link>
    //                 </li>
    //             ))}
    //         </ul>
    //         <Routes>
    //             {rssFiles.map(name => (
    //                 <Route key={name} path={`/${name}`} element={<CsvTable filename={name} />} />
    //             ))}
    //         </Routes>
    //
    //         {/*<CsvTable/>*/}
    //     </div>
    // </Router>
>>>>>>> 4da827fa8d3ba93df77e60241b8c1a4e404e7d44
  );
}

export default App;
