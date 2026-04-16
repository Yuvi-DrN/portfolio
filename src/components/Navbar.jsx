function Navbar() {
   return (
     <nav style={styles.nav}>
       <h2 style={styles.logo}>Yuvraj</h2>
 
       <div style={styles.links}>
         <a href="#about">About</a>
         <a href="#skills">Skills</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>
       </div>
     </nav>
   );
 }
 
 const styles = {
   nav: {
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
     padding: "18px 40px",
     background: "rgba(2, 6, 23, 0.85)",
     backdropFilter: "blur(10px)",
     position: "sticky",
     top: 0,
     borderBottom: "1px solid #1e293b"
   },
   logo: {
     color: "#38bdf8",
     margin: 0,
     fontSize: "22px"
   },
   links: {
     display: "flex",
     gap: "18px"
   }
 };
 
 export default Navbar;