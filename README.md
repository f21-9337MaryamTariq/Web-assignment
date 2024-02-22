# Question no 1:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Calculator</title>
<style>
  .calculator {
    width: 310px;
    margin: 100px auto;
    padding: 1px;
    border: 1px solid #ccc;
    border-radius: 1px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
	color: white;
  }
  
  .input-field {
    grid-column: span 3;
    width: calc(90% );
    padding: 10px;
    border: 1px solid black;
    border-radius: 1px;
	color: white;
  }
  
  .clear-button {
    width: calc(35% + 50px);
    padding: 8 px;
    border: 1px solid #e0e0e0;
    border-radius: 1px;
    font-size: 16px bold;
	color: white;
	background-color: green;
  }
  .button {
    width: calc(35% + 50px);
    padding: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 1px;
    font-size: 16px bold;
	color: white;
	background-color: green;
  }
</style>
</head>
<body>

<div class="calculator">
  <input type="text" class="input-field" id="output" >
  <button class="clear-button">C</button>
  <button class="button">1</button>
  <button class="button">2</button>
  <button class="button">3</button>
  <button class="button">/</button>
  <button class="button">4</button>
  <button class="button">5</button>
  <button class="button">6</button>
  <button class="button">*</button>
  <button class="button">7</button>
  <button class="button">8</button>
  <button class="button">9</button>
  <button class="button">+</button>
  <button class="button">0</button>
  <button class="button">.</button>
  <button class="button">=</button>
  <button class="button">-</button>
</div>

</body>
</html>

 # //Question no 2:

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Timetable</title>
<style>
  table {
    width: 80%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid ;
    padding: 8px;
    text-align: center;
    width: 14.28%; /* Equal width for all columns */
  }
  h6 {
    text-align: center;
  }
  h3 {
    text-align: center;
  }
</style>
</head>
<body>

<h6>Department Of Computer Science</h6>
<h3>BCS-6E</h3>

<table>
  <tr>
    <th></th>
    <th>8:45 - 10:10</th>
    <th>10:15 - 11:40</th>
    <th>11:45 - 1:10</th>
    <th>1:10 - 1:45</th>
    <th>1:45 - 3:10</th>
    <th>3:15 - 4:40</th>
  </tr>
  <tr>
    <td>MONDAY</td>
    <td></td>
    <td>Web Programming</td>
    <td>Parallel & Distribution Computing</td>
    <td></td>
    <td>Artificial Intelligence</td>
    <td></td>
  </tr>
  <tr>
    <td>TUESDAY</td>
    <td>Computer Networks</td>
    <td>Artificial Intelligence</td>
    <td></td>
    <td></td>
    <td>Artificial Intelligence - lab</td>
    <td>Artificial Intelligence - lab</td>
  </tr>
  <tr>
    <td>WEDNESDAY</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Computer Networks - lab</td>
    <td>Computer Networks - lab</td>
  </tr>
  <tr>
    <td>THURSDAY</td>
    <td></td>
    <td>Computer Networks</td>
    <td>Software Design & Analysis</td>
    <td></td>
    <td>Web Programming</td>
    <td>Parallel & Distribution Computing</td>
  </tr>
  <tr>
    <td>FRIDAY</td>
    <td></td>
    <td>Software Design & Analysis</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

</body>
</html>

# // Question no 3:

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CV</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
  }
  .container {
    width: calc(80% + 3cm);
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    margin-left: 5%;
  }
  .left-section {
    flex: 3;
    background-color: #808080;
  }
  .section {
    margin-bottom: 20px;
    border-bottom: 1px solid #000000;
    padding-bottom: 10px;
  }
  h1 {
    border-bottom: 1px solid #000000;
    padding-bottom: 10px;
  }
  
</style>
</head>
<body>

<div class="container">
  <div class="left-section">
    <h1>MARYAM TARIQ</h1>
    <p>
	<h5> FULL STACK DEVELOPER </h5>
	<h5> TELL NO - 01234567891 </h5>
	</p>
    
    <div class="section">
      <h2>Background</h2>
      <h5>DOB - 16/10/2003</h5>
      <h5>ADDRESS: H# 123 , ST# 2, FSD</h5>
    </div>
    
    <div class="section">
      <h2>Education</h2>
      <h5>BSCS from FAST NUCES 2021 - 2025</h5>
      <h5>FSC from GCWUF 2019 - 2021</h5>
      <h5>MATRIC from PGS 2017 - 2019</h5>
    </div>
    
    <div class="section">
      <h2>All Experiences</h2>
      <h5>ASSIGNMENT EXPERT</h5>
      <h5>CONTENT CREATOR</h5>
      <p>In BSCS...</p>
      <ul>
        <li>Spider Robot - DLD</li>
        <li>Coding Games : Snake , Connect 4, tic tac toe</li>
        <li>library management system , notepad</li>
      </ul>
    </div>
    
    <div class="section">
      <h2>Skills</h2>
      <ul>
        <li>Video Editting</li>
        <li>c++ , python</li>
      </ul>
    </div>
  </div>
</div>

</body>
</html>
