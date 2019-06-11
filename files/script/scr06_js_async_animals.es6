// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Node JS - Farma Scripts Minimized Class  [V.0.0.1]  (2018-08-06)
// Brqx Group - Agile Farmacia Zaragoza Methodology [ES6]
//-------------------------------------------------------------------------------------
// Farma Structure Scripts - Version 01 - Js as scripts
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


class scr06_js_async_animals extends getset  {

    constructor (     thm	              						)
    {   

		super()

		this.n							=	'scr01_truck::'						
		this.m							=	'constructor'

		this.thm						=	thm							
	
		this.script_runtime				=	new html_style('script')
		this.script_polyfills			=	new html_style('script')
		this.script_scripts				=	new html_style('script')
		this.script_main				=	new html_style('script')

		this.build_data()													

    }

	//[S_01]<script src="https://code.jquery.com/jquery-3.3.11.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	//    crossorigin="anonymous"></script>
    create_jquery()
    {
		this.script_jquery.async			=  	'async'									

		let js_name							=	'jquery.min.js'

		this.script_jquery.src				=  	
				this.thm.u.http_domainbar + 'r_fassets/libs/js/jquery/' + js_name 									

		this.script_jquery.pcreate()														
		
		this.code							+=	this.script_jquery.code						
	}		

	//[S_01]<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>

    create_slick()
    {
		this.script_jquery.async			=  	'async'									

		let js_name							=	'slick.min.js'

		this.script_jquery.src				=  	
				this.thm.u.http_domainbar + 'r_fassets/libs/js/' + js_name 									

		this.script_jquery.pcreate()														
		
		this.code							+=	this.script_jquery.code						
	}		


	//[S_01] <script type="text/javascript" src="runtime.a66f828dca56eeb90e02.js"></script>
    create_runtime()
    {
		//this.script_runtime.async				=  	'async'									


		let js_name							=	'runtime.js'

		this.script_runtime.src					=  	
			this.thm.u.http_domainbar + 'dev/' + js_name

		this.script_runtime.pcreate()														
		
		this.code							+=	this.script_runtime.code						
	}		

	//[S_02] <script type="text/javascript" src="polyfills.f80b7e6581d9215d226e.js"></script>
    create_polyfills()
    {
		// this.script_polyfills.async			=  	'async'									

		let js_name							=	'polyfills.js'

		this.script_polyfills.src					=  	
			this.thm.u.http_domainbar + 'dev/' + js_name

		this.script_polyfills.pcreate()														
		
		this.code							+=	this.script_polyfills.code						
	}		


	//[S_03] <script type="text/javascript" src="scripts.24cc8b20c3f290309576.js"></script>
    create_scripts()
    {
		// this.script_scripts.async		=  	'async'									

		let js_name							=	'scripts.js'

		this.script_scripts.src					=  	
			this.thm.u.http_domainbar + 'dev/' + js_name

		this.script_scripts.pcreate()														
		
		this.code							+=	this.script_scripts.code						

	}		

	//[S_04] <script type="text/javascript" src="main.d05ea5aaed6e4704fb1e.js"></script>
    create_main()
    {
		// this.script_main.async		=  	'async'									

		let js_name							=	'main.js'

		this.script_main.src					=  	
			this.thm.u.http_domainbar + 'dev/' + js_name

		this.script_main.pcreate()														
		
		this.code							+=	this.script_main.code						

	}		



    build_data()
    {
		this.create_jquery()
		this.create_slick()

		this.create_runtime()
		this.create_polyfills()
		// this.create_scripts()
		this.create_main()

		// Pending [17-11-02]
		// this.p('Code : >' + this.code ) 											

    }

}

exports.scr06_js_async_animals = scr06_js_async_animals
