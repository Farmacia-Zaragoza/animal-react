// [DOCHANGED_ES6]
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Node JS - Farma Scripts Inline Class  [V.0.0.1]  (2018-08-06)
// Brqx Group - Agile Farmacia Zaragoza Methodology [ES6]
//-------------------------------------------------------------------------------------
// Farma Structure Scripts
//-------------------------------------------------------------------------------------
//[S_01]<script src="https://code.jquery.com/jquery-3.3.11.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
//    crossorigin="anonymous"></script>
//[S_01]<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>

//[S_01] <script type="text/javascript" src="runtime.a66f828dca56eeb90e02.js"></script>
//[S_02] <script type="text/javascript" src="polyfills.f80b7e6581d9215d226e.js"></script>
//[S_03] <script type="text/javascript" src="scripts.24cc8b20c3f290309576.js"></script>
//[S_04] <script type="text/javascript" src="main.d05ea5aaed6e4704fb1e.js"></script>

// ------------------------------------------------------------------------------------
//* SCRIPT *
// uglifyjs main_live.js -o main_minimized.js
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Class:c-scr05_js_inline_animals-
// ------------------------------------------------------------------------------------
// Methods:
// ------------------------------------------------------------------------------------
// - build_data  	 		: 	Build html final code for object
// - d-create_objectN-		: 	Create Blazy content
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--

var 	cons 				= 	require(	"/brqx/base/rcode/ea6/com/libs/general/constants.es6"								);

const 	{ getset } 			= 	require(	cons.JS_BASE + 'com/objects/html/getset.es6'										),		
		{ html_style } 		= 	require(	cons.JS_BASE + 'com/objects/html/html_style.es6'									),
		scpf				= 	require( 	cons.JS_BASE + 'com/libs/file/full_path/level_02/save_code_properties_filename.es6'	),
		UglifyES 			= 	require(	cons.NODE_MOD +	'uglify-es'															),		
		minify 				= 	require(	cons.NODE_MOD +	'html-minifier'														).minify;


class scr05_js_inline_animals extends getset  {

    constructor (     thm	              						)
    {   

		let 	tag_name		=		'script'
		super( tag_name )

		this.n					=		'scr01_truck::'						
		this.m					=		'constructor'

		this.thm				=		thm							

		this.scr01				=		new html_style('script')

 		this.scr01.type			=		"text/javascript" 
 		this.scr01.charset		=		"utf-8"
	
		this.script_code_path	=		''
		
		this.build_data()													

    }

	//[S_01]<script src="https://code.jquery.com/jquery-3.3.11.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	//    crossorigin="anonymous"></script>
    create_jquery()
    {

		let js_name 								=	'jquery-3.3.1.min.js'

		this.script_code_path				=  	
				this.thm.u.site_path + '/r_fassets/js' + js_name	

		this.p('SITE_PATH ' + this.script_code_path )
		
		this.content		+=		scpf.file_get_code(this.script_code_path) + " "

	}		

	//[S_01]<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>
    create_slick()
    {

		let js_name 								=	'slick_1_6_0_min.js'

		this.script_code_path				=  	
				this.thm.u.site_path + '/r_fassets/js/' + js_name

		this.p('SITE_PATH ' + this.script_code_path )

		this.content		+=		scpf.file_get_code(this.script_code_path) + " "

	}		

	//[S_01] <script type="text/javascript" src="runtime.a66f828dca56eeb90e02.js"></script>
    create_runtime()
    {
		// It is already minimized
		let js_name							=	'runtime_min.js'


		this.script_code_path				=  	
				this.thm.u.site_path + '/dev/' + js_name

		this.p('SITE_PATH ' + this.script_code_path )

		this.content			+=		scpf.file_get_code(this.script_code_path)

	}		

	//[S_02] <script type="text/javascript" src="polyfills.f80b7e6581d9215d226e.js"></script>
    create_polyfills()
    {

		let js_name							=	'polyfills.js'

		this.script_code_path				=  	
				this.thm.u.site_path + '/dev/' + js_name

		this.p('SITE_PATH ' + this.script_code_path )

		this.content			+=		scpf.file_get_code(this.script_code_path)
	}		


	//[S_04] <script type="text/javascript" src="main.d05ea5aaed6e4704fb1e.js"></script>
    create_main()
    {
		let js_name							=	'main_min.js'

		this.script_code_path				=  	
				this.thm.u.site_path + '/dev/' + js_name

		this.p('SITE_PATH ' + this.script_code_path )

	}		

    build_data()
    {
		this.create_jquery()
		this.create_slick()

		this.create_runtime()
		this.create_polyfills()
		this.create_main()

		// Ok [17-11-02]
		// this.p('Code : >' + this.code ) 											

    }

}

exports.scr05_js_inline_animals = scr05_js_inline_animals