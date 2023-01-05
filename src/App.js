import logo from './logo.svg';
import './App.css';
import MapChart from './mapchart';
import Region from './variable';
 

function App() {
  return (
    
    <div className='bg'>
		<div className='png'>
    <img className='map' src="https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg"></img>
	</div>
    <Region />
      <div className='graph'>
      <h2 className='project'>Project by Samyak Aditya</h2>  
      
      <div>  
      <a class="button" href="#popup1">
        <div className="us" data-tooltip="America"></div>
      </a>
      <div id="popup1" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/206/206626.png" height="25px" width="25px" /></h2><h2 className='usa'> America</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Washington, D.C.<br /><br/>
    Population(approx): 33.19 crores<br /><br/>
    Data Usage : 780 <br /><br/>

		</div>
	</div>
</div>

<div>  
      <a class="button" href="#popup2">
      <div className="ru" data-tooltip="Russia"></div>
      </a>
      <div id="popup2" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/168/168112.png" height="25px" width="25px" /></h2><h2 className='rus'> Russia</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Moscow<br /><br/>
    Population(approx): 14.34 crores<br /><br/>
    Data Usage : 830 <br /><br/>

		</div>
	</div>
</div>


      </div> 

<div>  
      <a class="button" href="#popup3">
      <div className="es" data-tooltip="Spain "></div>
      </a>
      <div id="popup3" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/330/330557.png" height="25px" width="25px" /></h2><h2 className='usa'> Spain</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Madrid<br /><br/>
    Population(approx): 4.73 crores<br /><br/>
    Data Usage : 480 <br /><br/>

		</div>
	</div>
</div>

</div> 

<div>  
      <a class="button" href="#popup4">
      <div className="in" data-tooltip="India"></div>
      </a>
      <div id="popup4" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/330/330439.png" height="25px" width="25px" /></h2><h2 className='usa'> India</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: New Delhi<br /><br/>
    Population(approx): 139.34 crores<br /><br/>
    Data Usage : 1070 <br /><br/>

		</div>
	</div>
</div>

</div> 

<div>  
      <a class="button" href="#popup5">
      <div className="sa" data-tooltip="South Africa"></div>
      </a>
      <div id="popup5" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/330/330485.png" height="25px" width="25px" /></h2><h2 className='usa'> South Africa</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital:  Cape Town, Pretoria, Bloemfontein<br /><br/>
    Population(approx): 6 crores<br /><br/>
    Data Usage : 420 <br /><br/>

		</div>
	</div>
</div>

</div> 

<div>  
      <a class="button" href="#popup6">
      <div className="at" data-tooltip="Austria"></div>
      </a>
      <div id="popup6" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/330/330682.png" height="25px" width="25px" /></h2><h2 className='usa'> Austria</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Vienna<br /><br/>
    Population(approx): 89.6 lakhs<br /><br/>
    Data Usage : 430 <br /><br/>

		</div>
	</div>
</div>

</div> 


<div>  
      <a class="button" href="#popup7">
      <div className="jp" data-tooltip="Japan"></div>
      </a>
      <div id="popup7" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/939/939616.png" height="25px" width="25px" /></h2><h2 className='usa'> Japan</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Tokyo<br /><br/>
    Population(approx): 1.4 crores<br /><br/>
    Data Usage : 710 <br /><br/>

		</div>
	</div>
</div>

</div> 

<div>  
      <a class="button" href="#popup8">
      <div className="fr" data-tooltip="France"></div>
      </a>
      <div id="popup8" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/330/330490.png" height="25px" width="25px" /></h2><h2 className='usa'> France</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Paris<br /><br/>
    Population(approx): 6.75 crores<br /><br/>
    Data Usage : 610 <br /><br/>

		</div>
	</div>
</div>

</div> 

<div>  
      <a class="button" href="#popup9">
      <div className="ca" data-tooltip="Canada"></div>
      </a>
      <div id="popup9" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/330/330442.png" height="25px" width="25px" /></h2><h2 className='usa'> Canada</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Ottawa<br /><br/>
    Population(approx): 3.82 crores<br /><br/>
    Data Usage : 910 <br /><br/>

		</div>
	</div>
</div>

</div> 

<div>  
      <a class="button" href="#popup10">
      <div className="br" data-tooltip="Brazil"></div>
      </a>
      <div id="popup10" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/330/330430.png" height="25px" width="25px" /></h2><h2 className='usa'> Brazil</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Brasília<br /><br/>
    Population(approx): 21.4 crores<br /><br/>
    Data Usage : 800 <br /><br/>

		</div>
	</div>
</div>

</div> 

<div>  
      <a class="button" href="#popup11">
      <div className="cn" data-tooltip="China"></div>
      </a>
      <div id="popup11" class="overlay">
	<div class="popup">
    
		<h2><img src="https://cdn-icons-png.flaticon.com/512/2151/2151303.png" height="25px" width="25px" /></h2><h2 className='usa'> China</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
		Capital: Beijing<br /><br/>
    Population(approx): 141.24 crores<br /><br/>
    Data Usage : 910 <br /><br/>

		</div>
	</div>
</div>
<div className='line1'>&lt; 1000</div>
<div className='line2'>&gt; 1000</div>
<div className='line3'>&gt; 500</div>
<div className='pro'>
Thank you for your Visit</div>

</div>
</div>
</div>
</div>
 
 
  )
};

export default App;