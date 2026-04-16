function Skills() {
   return (
     <section id="skills">
       <h2>Skills</h2>
 
       <div style={styles.grid}>
         <div style={styles.card}>Python</div>
         <div style={styles.card}>C++</div>
         <div style={styles.card}>JavaScript</div>
         <div style={styles.card}>HTML</div>
         <div style={styles.card}>CSS</div>
       </div>
     </section>
   );
 }
 
 const styles = {
   grid: {
     display: "grid",
     gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
     gap: "15px"
   },
   card: {
     background: "#1e293b",
     padding: "15px",
     borderRadius: "10px",
     textAlign: "center",
     border: "1px solid #334155"
   }
 };
 
 export default Skills;