function Hero() {
   return (
     <section style={styles.hero}>
       <div style={styles.container}>
         
         <img 
           src="" 
           alt="profile"
           style={styles.image}
         />
 
         <h1 style={styles.title}>Hi, I'm Yuvraj</h1>
         <p style={styles.subtitle}>
           B.Tech CSE Student | Python | C++ | JavaScript Developer
         </p>
 
         <a href="#projects" style={styles.button}>
           View My Work
         </a>
 
       </div>
     </section>
   );
 }
 
 const styles = {
   hero: {
     textAlign: "center",
     padding: "100px 20px"
   },
   container: {
     maxWidth: "600px",
     margin: "auto"
   },
   image: {
     width: "120px",
     borderRadius: "50%",
     marginBottom: "20px",
     border: "3px solid #38bdf8"
   },
   title: {
     fontSize: "40px",
     margin: "10px 0",
     color: "#38bdf8"
   },
   subtitle: {
     color: "#cbd5e1",
     marginBottom: "20px"
   },
   button: {
     display: "inline-block",
     padding: "10px 20px",
     background: "#38bdf8",
     color: "#0f172a",
     borderRadius: "8px",
     textDecoration: "none",
     fontWeight: "bold"
   }
 };
 
 export default Hero;