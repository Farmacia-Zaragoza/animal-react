// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Node Js - Pharmacy Body Class  [V.0.0.4]  (2019-01-22)
// Brqx Group - Agile Farmacia Zaragoza Methodology
// Spc - Browser - Home - Index_06 - v0_0_2
//-------------------------------------------------------------------------------------
// Peloncita Structure Header
//-------------------------------------------------------------------------------------
// <body 
//  <app-root></app-root>

// Home page
// <div id="root" 
//  page-type='policy'
//	data-comm-any="fnode/jsons/common_for_all_pages_for_any_lang.json"
//	data-comm-lang="fnode/jsons/common_for_any_page_but_for_one_lang.json"
//	data-spec-any="fnode/jsons/specific_for_a_page_and for any lang.json"
//	data-spec-lang="fnode/jsons/specific_for_a_page_and_only_for_one_lang.json">


// ------------------------------------------------------------------------------------
//* BODY
//    PENDING
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Methods:
// ------------------------------------------------------------------------------------
// - build_data  	 : Build html final code for object
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--

var 	cons 							= 	require(	"/brqx/base/rcode/ea6/com/libs/general/constants.es6"							)

const 	{ html_style } 					= 	require(	cons.JS_BASE 	+ 	'com/objects/html/html_style.es6'							),		
		{ svg_style } 					= 	require(	cons.JS_BASE  	+ 	'com/objects/html/svg_style.es6'							),
		{ scr01_js_animals }				= 	require(	cons.JS_BASE 	+ 	'spc/theme/animals/main_html/scr01_js_animals.es6'					),					
		{ ifnojs }	 					= 	require(	cons.JS_BASE 	+ 	'com/objects/html/ifnojs.es6'								),
		minify 							= 	require(	cons.NODE_MOD 	+	'html-minifier'												).minify;


class bdy01_body_animals extends html_style  {

    constructor (     thm						)
    {   
		let tag_type					=	'body'
		super(tag_type)

		this.n							=	'bdy_animals::'		
        this.tag_type     				= 	'body'							

		this.thm						=	thm							

		// Tenemos que tener como un mapa del site
		this.thm.map					= 	'body/'								


		// Common Json
		this.jnode_comm				=	this.thm.arr['fnode']['json_comm']
		this.jnode_spec				=	this.thm.arr['fnode']['json_spec']

    	this.scripts_01					=	''                                      		

		this.ifnojs						=	new ifnojs()					

    	this.div_01     	        	=	new html_style('div')        
    	this.div_02     	        	=	new html_style('div')        
		
	
		this.build_data()													

    }


  	create_div()
    {
		this.div_01.id					=	'root'

		this.div_01.data_type			=	this.thm.u.page_command


//		let common_json					=	'https://farma.vbrqx.com/ang/json/common.json'
//		let lang_common_json			=	'https://farma.vbrqx.com/ang/json/langs/en/common.json'

		this.div_01.data_comm		=	this.jnode_comm.load_from_disk_lang_url_code 

		this.div_01.data_spec 		=	this.jnode_spec.load_from_disk_lang_url_code 
		
		this.div_01.pcreate()
		this.content					+=	this.div_01.code
	}


	create_infodivs()
	{
		let comm_text 	= 'Comm_Any  - Common for All Pages    - Ideal for Any Lang' 
		let spec_text 	= 'Spec_Any  - Specific page (Front..) - Good for Any Lang' 


		this.div_02.content = comm_text
		this.div_02.pcreate() 
		this.content					+=	this.div_02.code

		this.div_02.content 		=	this.jnode_comm.load_from_disk_lang_url_code 
		this.div_02.pcreate() 
		this.content					+=	this.div_02.code
		
		this.div_02.content = spec_text
		this.div_02.pcreate() 
		this.content					+=	this.div_02.code
		
		this.div_02.content  		=	this.jnode_spec.load_from_disk_lang_url_code 
		this.div_02.pcreate() 
		this.content					+=	this.div_02.code
		
	}
	


  	create_scripts()
    {
		// Here we have two options
		// Scripts links for dev environment
		// Script tag for live environment

  		this.scripts_01		= 	
  				new scr01_js_animals(	this.thm	)			
		
		this.content			+=	this.scripts_01.code							
	}

    // <!--[if lt IE 8]>
    //        <p class="animalsupgrade">You are using an <strong>outdated</strong> animals. Please <a href="http://browsehappy.com/">upgrade your animals</a> to improve your experience.</p>
    // <![endif]-.

  	create_ifnojs()
    {
		// External links
		this.ifnojs.ifno_complex_mode_02('8' , 'lt' , '<p class="animalsupgrade">You are using an <strong>outdated</strong> animals. Please <a href="http://browsehappy.com/">upgrade your animals</a> to improve your experience.</p>'  	)							 	
		
		this.content 			+= 	this.ifnojs.code 	
	}



    build_data()
    {
	// Structure 
	// [FB] [CONTAINER] [SCRIPTS] [SERVER_FOOTER]
		this.content			=	''								
		
		this.create_div()

		// this.create_infodivs()

		this.create_scripts()										

		this.pcreate()											

		// Ok [18-02-02]
		// this.p('bdy01:cod ' + this.code)							
		
    }

}

exports.bdy01_body_animals = bdy01_body_animals