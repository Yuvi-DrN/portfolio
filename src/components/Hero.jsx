function Hero() {
   return (
     <section style={styles.hero}>
       <h1>Hi, I'm Yuvraj</h1>
       <p>B.Tech CSE Student | Python | C++ | JavaScript Developer</p>
 
       <button style={styles.button}>View Projects</button>
     </section>
   );
 }
 
 const styles = {
   hero: {
     textAlign: "center",
     padding: "100px 20px"
   },
   button: {
     marginTop: "20px",
     padding: "12px 24px",
     background: "#38bdf8",
     border: "none",
     borderRadius: "8px",
     cursor: "pointer",
     fontWeight: "bold",
     color: "#0f172a"
   }
 };
 
 export default Hero;