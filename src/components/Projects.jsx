function Projects() {
   return (
     <section id="projects">
       <h2>Projects</h2>
 
       <div style={styles.card}>
         <h3>Weather App</h3>
         <p>React app that shows real-time weather using API.</p>
       </div>
 
       <div style={styles.card}>
         <h3>File Organizer</h3>
         <p>Python script to automatically sort files into folders.</p>
       </div>
 
       <div style={styles.card}>
         <h3>Student System</h3>
         <p>C++ console project for managing student data.</p>
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
     border: "1px solid #334155"
   }
 };
 
 export default Projects;