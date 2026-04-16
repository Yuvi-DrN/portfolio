function Projects() {
   return (
     <section id="projects">
       <h2>Projects</h2>
 
       <div style={styles.card}>
         <h3>Weather App</h3>
         <p>React app using API to show real-time weather.</p>
         <a href="#" target="_blank">GitHub</a>
       </div>
 
       <div style={styles.card}>
         <h3>File Organizer</h3>
         <p>Python script that organizes files automatically.</p>
         <a href="#" target="_blank">GitHub</a>
       </div>
 
       <div style={styles.card}>
         <h3>Student System</h3>
         <p>C++ console-based management system.</p>
         <a href="#" target="_blank">GitHub</a>
       </div>
     </section>
   );
 }
 
 const styles = {
   card: {
     background: "#1e293b",
     padding: "20px",
     marginTop: "15px",
     borderRadius: "12px",
     border: "1px solid #334155",
     transition: "0.3s"
   }
 };
 
 export default Projects;