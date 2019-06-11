// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Node JS - Farma Scripts Class  [V.0.0.1]  (2018-02-01)
// Brqx Group - Agile Farmacia Zaragoza Methodology [ES6]
//-------------------------------------------------------------------------------------
// Farma Structure Scripts
//-------------------------------------------------------------------------------------

//[S_01] <script type="text/javascript" src="runtime.a66f828dca56eeb90e02.js"></script>
//[S_02] <script type="text/javascript" src="polyfills.f80b7e6581d9215d226e.js"></script>
//[S_03] <script type="text/javascript" src="scripts.24cc8b20c3f290309576.js"></script>
//[S_04] <script type="text/javascript" src="main.d05ea5aaed6e4704fb1e.js"></script>

// ------------------------------------------------------------------------------------
//* SCRIPT *
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Class:c-scr01_js_dog-
// ------------------------------------------------------------------------------------
// Methods:
// ------------------------------------------------------------------------------------
// - build_data  	 		: Build html final code for object
// - d-create_marquee-		: Create marquee script
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--

var 	cons 							= 	require(	"/brqx/base/rcode/ea6/com/libs/general/constants.es6"								)

const 	{ getset } 						= 	require(	cons.JS_BASE + 'com/objects/html/getset.es6'										),		
		{ html_style } 					= 	require(	cons.JS_BASE + 'com/objects/html/html_style.es6'									),
		{ scr02_js_scripts_animals }		= 	require(	cons.JS_BASE + 'spc/theme/animals/deep_html/scripts/scr02_js_scripts_animals.es6'			),
		{ scr03_js_minimized_animals }	= 	require(	cons.JS_BASE + 'spc/theme/animals/deep_html/scripts/scr03_js_minimized_animals.es6'			),
		{ scr05_js_inline_animals }		= 	require(	cons.JS_BASE + 'spc/theme/animals/deep_html/scripts/scr05_js_inline_animals.es6'	),
		{ scr06_js_async_animals }		= 	require(	cons.JS_BASE + 'spc/theme/animals/deep_html/scripts/scr06_js_async_animals.es6'				),
		{ cn03_scripts } 				= 	require(	cons.JS_BASE + 'spc/theme/common/fast_node/cnode/cn03_scripts.es6'					);


class scr01_js_animals extends getset  {

    constructor (     thm	              						)
    {   
		super()

		this.n							=	'scr01_dog::'						
		this.m							=	'constructor'

		this.thm						=	thm							

		// External object
		this.script_to_load				=	''
		this.script_to_load2				=	''
		
		// Composition object
	 	this.compo_scripts				=	''																							
		
		this.build_data()													
    }


	check_loaded_scripts()
	{
		this.head_code = ''				

		this.compo_scripts	= new cn03_scripts(this.thm.u , 'scripts')

		if ( this.compo_scripts.is_correct_to_reload_type() ) 
		{

			if ( !this.thm.b.site_live )
			{
				// DEV - requiere primero los otro scripts

				if 			( this.thm.s.live_opt === 'script')
					this.script_to_load 	= 	new scr02_js_scripts_animals(this.thm)
				else if 	( this.thm.s.live_opt === 'minimized')
					this.script_to_load 	= 	new scr03_js_minimized_animals(this.thm)
				else if 	( this.thm.s.live_opt === 'inline')
					this.script_to_load 	= 	new scr05_js_inline_animals(this.thm)
				else if 	( this.thm.s.live_opt === 'inlinestyles')
					this.script_to_load 	= 	new scr05_js_inline_animals(this.thm)
				else if 	( this.thm.s.live_opt === 'inline_and_save')
				{
					this.script_to_load 	= 	new scr05_js_inline_animals(this.thm)
				}
				
				// MAIN - PRODUCT
				this.code					+=	this.script_to_load.code	

			}
			else
			{
				// LIVE
				// Esta parte puede generarse de muchas formas
				// 1.como script
				// 2.como script minimizado
				// 3.inline
				if 			( this.thm.s.live_opt === 'script')
					this.script_to_load 	= 	new scr02_js_scripts_animals(this.thm)
				else if 	( this.thm.s.live_opt === 'minimized')
					this.script_to_load 	= 	new scr03_js_minimized_animals(this.thm)
				else if 	( this.thm.s.live_opt === 'inline')
					this.script_to_load 	= 	new scr05_js_inline_animals(this.thm)
				else if 	( this.thm.s.live_opt === 'inlinestyles')
					this.script_to_load 	= 	new scr05_js_inline_animals(this.thm)
				else if 	( this.thm.s.live_opt === 'inline_and_save')
				{
					this.script_to_load 	= 	new scr05_js_inline_animals(this.thm)
				}

				else
					this.p('wrong_parameter ' + this.thm.s.live_opt )

				this.code					+=	this.script_to_load.code	

				if 	( this.thm.s.live_opt === 'inline_and_save')
					this.code				+=	this.script_to_load2.code	
			}
			
			// Actualizamos el codigo del objeto
			this.compo_scripts.load_type_details(this.code)					
		}		

		this.code	=	this.compo_scripts.code						
		
	}


    build_data()
    {

		this.check_loaded_scripts()													

		// Ok [18-10-07]
		// this.p('jsFarmaCode : >' + this.code ) 											

    }

}

exports.scr01_js_animals = scr01_js_animals
