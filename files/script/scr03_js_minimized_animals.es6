// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Node JS - Farma Scripts Minimized Class  [V.0.0.1]  (2018-02-01)
// Brqx Group - Agile Farmacia Zaragoza Methodology [ES6]
//-------------------------------------------------------------------------------------
// Truck Structure Scripts - Version 01 - Js as scripts
//-------------------------------------------------------------------------------------
//[S_01]<script src="https://code.jquery.com/jquery-3.3.11.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
//    crossorigin="anonymous"></script>
//[S_01]<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>

//[S_01] <script type="text/javascript" src="runtime.a66f828dca56eeb90e02.js"></script>
//[S_02] <script type="text/javascript" src="polyfills.f80b7e6581d9215d226e.js"></script>
//[S_03] <script type="text/javascript" src="scripts.24cc8b20c3f290309576.js"></script>
//[S_04] <script type="text/javascript" src="main.d05ea5aaed6e4704fb1e.js"></script>

// ------------------------------------------------------------------------------------
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Class:c-scr01_js_truck-
// ------------------------------------------------------------------------------------
// Methods:
// ------------------------------------------------------------------------------------
// - build_data  	 		: Build html final code for object
// - d-create_script_0N-
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--

var 	cons 				= 	require("/brqx/base/rcode/ea6/com/libs/general/constants.es6"									);

const 	{ getset } 			= 	require(	cons.JS_BASE + 'com/objects/html/getset.es6'										),		
		{ html_style } 		= 	require(	cons.JS_BASE + 'com/objects/html/html_style.es6'									);


class scr03_js_minimized_animals extends getset  {

    constructor (     thm	              						)
    {   
		super()

		this.n								=	'scr03_js_minimized_animals::'						
		this.m								=	'constructor'

		this.thm							=	thm							
	
		this.script_01						=	new html_style('script')
					
		this.script_jquery					=	new html_style('script')

		this.build_data()													

    }

	//[S_01] <script src="http://animals.vbrqx.com/dev/cassets/js/jquery-3.3.11.min.js"></script>
	//[S_01]<script src="https://code.jquery.com/jquery-3.3.11.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	//    crossorigin="anonymous"></script>

    create_jquery()
    {
		let js_name 								=	'jquery-3.3.1.min.js'		

		this.script_jquery.defer					=  	'defer'									

		
		this.script_jquery.src				=  	
			this.thm.u.http_domainbar + 'r_fassets/js/' + js_name 	

		this.script_jquery.pcreate()														
		
		this.code						+=	this.script_jquery.code						
	}		

	//[S_01]<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>
    create_slick()
    {
		let js_name 								=	'slick_1_6_0_min.js'		

		this.script_jquery.defer					=  	'defer'									

		
		this.script_jquery.src				=  	
			this.thm.u.http_domainbar + 'r_fassets/js/' + js_name

		this.script_jquery.pcreate()														
		
		this.code						+=	this.script_jquery.code						
	}		

	//[S_01] <script type="text/javascript" src="runtime.a66f828dca56eeb90e02.js"></script>
    create_runtime()
    {
		// this.script_01.defer				=  	'defer'									
		// this.script_01.async				=  	'async'	

		// It is already minimized
		let js_name							=	'runtime_min.js'


		this.script_01.src					=  	
			this.thm.u.http_domainbar + 'dev/' + js_name

		this.script_01.pcreate()														
		
		this.code							+=	this.script_01.code	
	}		

	//[S_02] <script type="text/javascript" src="polyfills.f80b7e6581d9215d226e.js"></script>
    create_polyfills()
    {

		this.script_01.async				=  	''	

		let js_name							=	'polyfills_min.js'


		this.script_01.src					=  	
			this.thm.u.http_domainbar + 'dev/' + js_name
		
		this.script_01.pcreate()														
		
		this.code							+=	this.script_01.code	
	}		



	//[S_04] <script type="text/javascript" src="main.d05ea5aaed6e4704fb1e.js"></script>
    create_main()
    {
		this.script_01.async				=  	''	

		let js_name							=	'main_min.js'


		this.script_01.src					=  	
			this.thm.u.http_domainbar + 'dev/' + js_name

		this.script_01.pcreate()														
		
		this.code							+=	this.script_01.code						
	}		


    build_data()
    {
		this.create_jquery()
		this.create_slick()

		this.create_runtime()
		this.create_polyfills()
		this.create_main()

		// Pending [17-11-02]
		// this.p('jsmin_Code : >' + this.code ) 											

    }

}

exports.scr03_js_minimized_animals = scr03_js_minimized_animals
