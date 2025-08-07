<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     *	- or -
     * 		http://example.com/index.php/welcome/index
     *	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/userguide3/general/urls.html
     */
    protected $setting;
    protected $categories;
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->model(['MAdmin', 'MCategory', 'MFont', 'MFontCategory']);
        $this->load->helper(['url', 'func_helper', 'images']);
        $categoryParent = $this->MCategory->get(['parent_id' => 0]);
        $categories = [];
        foreach($categoryParent as $category) {
            $category['items'] = $this->MCategory->get(['parent_id' => $category['id']]);
            $categories[] = $category;
        }
        $this->categories = $categories;
    }

    public function index(){
        $data['categories'] = $this->categories;;
        $this->load->view('index',$data);
    }

    public function font(){
        $data['categories'] =$this->categories;;
        $this->load->view('front-end/font',$data);
    }

    public function detail($slug){
        $category = $this->MCategory->getOneBy(['slug' => $slug]);
        if(!empty( $category)) {
            $data['categories'] =$this->categories;
            $data['category_id'] = $category->id;
            $this->load->view('front-end/font',$data);
        } else {
            $font = $this->MFont->getOneBy(['slug' => $slug]);
            $data['categories'] =$this->categories;
            $cate1 = [];
            $cate2 = [];
            $cate3 = [];
            $cateFonts = $this->MFontCategory->get_fonts(['font_id' => $font->id, 'limit' => 20, 'offset' => 0]);
            if(!empty($cateFonts)) {
                foreach($cateFonts as $cateFont) {
                    if($cateFont['type_id'] == 1) {
                        $cate1[] = $cateFont;
                    } else if($cateFont['type_id'] == 2) {
                        $cate2[] = $cateFont;
                    } else {
                        $cate3[] = $cateFont;
                    }
                }
            }
            $data['cate1'] = $cate1;
            $data['cate2'] = $cate2;
            $data['cate3'] = $cate3;
            $data['font'] = $font;
            if(empty($font)) {
                redirect('/');
            }
            $this->load->view('front-end/fonts/detail',$data);
        }
    }
}