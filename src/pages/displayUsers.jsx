import DisplayQuery1 from "./displayUsers/displayQuery1";
import DisplayQuery2 from "./displayUsers/displayQuery2";
import DisplayQuery3 from "./displayUsers/displayQuery3";
import DisplayQuery4 from "./displayUsers/displayQuery4";
import DisplayQuery5 from "./displayUsers/displayQuery5";

export default function BasicTable() {
 
 const makeStyle={
    margin:"0 auto",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width:'80vw'
 }
  return (
    <div>
        <div style={makeStyle}>
            <h3>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”</h3>
            <DisplayQuery1/>
        </div>
        <div style={makeStyle}>
            <h3>Male Users which have phone price greater than 10,000</h3>
            <DisplayQuery2/>
        </div>
        <div style={makeStyle}>
            <h3>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h3>
            <DisplayQuery3/>
        </div>
        <div style={makeStyle}>
            <h3>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit</h3>
            <DisplayQuery4/>
        </div>
        <div style={makeStyle}>
            <h3>Show the data of top 10 cities which have the highest number of users and their average income</h3>
            <DisplayQuery5/>
        </div>
    </div>
    
  );
}
