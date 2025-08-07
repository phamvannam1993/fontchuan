<?php
error_reporting(1);
defined('BASEPATH') or exit('No direct script access allowed');
class Font extends CI_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model(['MFont', 'MFontCategory']);
        $this->load->database();
        $this->load->helper(array('form', 'url'));
        $this->load->helper(['url', 'func_helper', 'images']);
        $this->load->library(['session', 'pagination311', 'upload']);
    }

    public function form($id = 0) {
        $data['title'] = 'Thêm mới font';
        $data['text_button'] = 'Lưu';
        $data['content'] = '/admin/pages/template/form';
        $data['id'] = $id;
        $font = $this->input->post("dataForm");
        $dataError = [];
        if(!empty($font)) {
            if(empty($font['name'])) {
                $dataError['name'] = 'Tên loại khóa học không được để trống';
            } else {
                $checkExist = $this->MFont->getOneBy(['name' => $font['name']]);
                if($checkExist && $checkExist->id != $id) {
                    $dataError['name'] = 'Tên loại khóa học đã tồn tại';
                }
            }
            if(empty($dataError)) {
                $font['slug'] = createSlug($font['name']);
                if($id == 0) {
                    $font['created_at'] = date('Y-m-d H:i:s');
                }
                $font['updated_at'] = date('Y-m-d H:i:s');
                try {
                    if($id > 0) {
                        $this->MFont->update($id, $font);
                    } else {
                        $this->MFont->insert($font);
                    }
                    redirect('/admin/font');
                } catch(Exception $ex) {
                echo $ex;
                die;
                }
            }
        }
        $data["dataForm"] = $font;
        if(!empty($dataError)) {
            $data["dataForm"] = $font;
            $data["dataError"] = $dataError;
        } else {
            if($id > 0) {
                $data['title'] = 'Sửa khóa học';
                $font= $this->MFont->getOneByID($id);
                $data["dataForm"] = $font;
            } 
        }
        $data['forms'] = $this->getForm($data["dataForm"]);
        $this->load->view('admin/layouts/app', $data);
    }

    public function delete($id) {
        // is_admin();
        try {
            $this->MFont->delete($id);
            redirect('/admin/font');
        } catch(\Exception $ex) {
            echo json_encode(["success" => false, "message" => "Xóa thất bại"]);
        }
    }

    public function index() {
        // is_admin();
        $data['title'] = "Danh sách font";
        $page = $this->input->get('page') ? $this->input->get('page') : 1; 
        $perPage = $this->input->get('limit') ? $this->input->get('limit') : 10; // số mục mỗi trang
        $search = $this->input->get('search') ? $this->input->get('search') : ""; 
        $total = $this->MFont->count_all(['search' => $search]); // tổng số mục
        $totalPage = ceil($total / $perPage);

        // Tính vị trí mục đầu và cuối trên trang hiện tại
        $firstItem = ($page - 1) * $perPage + 1;
        $lastItem = min($firstItem + $perPage - 1, $total);

        // Tạo URL phân trang
        function pageUrl($p) {
            return '?page=' . $p;
        }
        $offset = ($page - 1) * $perPage;
        $fonts = $this->MFont->get(['limit' => $perPage, 'offset' => $offset, 'search' => $search]);
        $previousPageUrl = $page > 1 ? pageUrl($page - 1) : null;
        $nextPageUrl = $page < $totalPage ? pageUrl($page + 1) : null;

        // Tạo danh sách trang sẽ hiển thị
        $pagesToShow = [];

        if ($totalPage <= 5) {
            // Nếu <= 5 trang thì hiển thị hết
            for ($i = 1; $i <= $totalPage; $i++) {
                $pagesToShow[] = $i;
            }
        } else {
            // Luôn hiển thị trang 1
            $pagesToShow[] = 1;

            // Các trang ở giữa
            $start = max(2, $page - 1);
            $end = min($totalPage - 1, $page + 1);

            if ($start > 2) {
                $pagesToShow[] = '...';
            }

            for ($i = $start; $i <= $end; $i++) {
                $pagesToShow[] = $i;
            }

            if ($end < $totalPage - 1) {
                $pagesToShow[] = '...';
            }
            // Luôn hiển thị trang cuối
            $pagesToShow[] = $totalPage;
        }
        $data['page_name'] = 'font';
        $data['datas'] = $fonts;
        $data['lastItem'] = $lastItem;
        $data['page'] = $page;
        $data['fields'] = $this->listField();
        $data['pagesToShow'] = $pagesToShow; 
        $data['perPage'] = $perPage;
        $data['totalPage'] = $totalPage;
        $data['firstItem'] = $firstItem;
        $data['nextPageUrl'] = $nextPageUrl;
        $data['previousPageUrl'] = $previousPageUrl;
        $data['content'] = '/admin/pages/template/index';
        $this->load->view('admin/layouts/app', $data);
    }

    public function listField() {
        return [
            [
                'key' => 'id',
                'name' => 'ID'
            ],
            [
                'key' => 'name',
                'name' => 'Tên font'
            ],
            [
                'key' => 'slug',
                'name' => 'URL SEO'
            ],
            [
                'key' => 'image_url',
                'name' => 'Ảnh',
                'type' => 'image'
            ],
            [
                'key' => 'dowload_link',
                'name' => 'Đường dẫn tải font'
            ],
        ];
    }

    public function getForm($data) {
        return [
            [
                'title' => 'Tên loại khóa học',
                'field' => 'name',
                'value' => isset($data['name']) ? $data['name'] : '',
                'required' => true,
                'type' => 'text',
            ],
            [
                'title' => 'Tiêu đề',
                'field' => 'title',
                'value' => isset($data['title']) ? $data['title'] : '',
                'required' => true,
                'type' => 'text',
            ]
        ];
    }

    public function getFont() {
        $page = $this->input->get('page') ? $this->input->get('page') : 1; 
        $category_id =  $this->input->get('category_id') ? $this->input->get('category_id') : 0; 
        $perPage = $this->input->get('limit') ? $this->input->get('limit') : 20; // số mục mỗi trang
        $search = $this->input->get('search') ? $this->input->get('search') : ""; 
        $total = 0;
        if($category_id > 0)  {
            $total = $this->MFontCategory->count_fonts(['search' => $search, 'category_id' => $category_id]); // tổng số mục
        } else {
            $total = $this->MFont->count_all(['search' => $search]); // tổng số mục
        }
       
        $totalPage = ceil($total / $perPage);

        // Tính vị trí mục đầu và cuối trên trang hiện tại
        $firstItem = ($page - 1) * $perPage + 1;
        $lastItem = min($firstItem + $perPage - 1, $total);

        // Tạo URL phân trang
        function pageUrl2($p) {
            return '?page=' . $p;
        }
        $offset = ($page - 1) * $perPage;
        $fonts = [];
        if($category_id == 0)  {
            $fonts = $this->MFont->get(['limit' => $perPage, 'offset' => $offset, 'search' => $search]);
        } else {
            $fonts = $this->MFontCategory->get_fonts_with_categories(['limit' => $perPage, 'offset' => $offset, 'search' => $search, 'category_id' => $category_id]);
        }
        $previousPageUrl = $page > 1 ? pageUrl2($page - 1) : null;
        $nextPageUrl = $page < $totalPage ? pageUrl2($page + 1) : null;

        // Tạo danh sách trang sẽ hiển thị
        $pagesToShow = [];

        if ($totalPage <= 5) {
            // Nếu <= 5 trang thì hiển thị hết
            for ($i = 1; $i <= $totalPage; $i++) {
                $pagesToShow[] = $i;
            }
        } else {
            // Luôn hiển thị trang 1
            $pagesToShow[] = 1;

            // Các trang ở giữa
            $start = max(2, $page - 1);
            $end = min($totalPage - 1, $page + 1);

            if ($start > 2) {
                $pagesToShow[] = '...';
            }

            for ($i = $start; $i <= $end; $i++) {
                $pagesToShow[] = $i;
            }

            if ($end < $totalPage - 1) {
                $pagesToShow[] = '...';
            }
            // Luôn hiển thị trang cuối
            $pagesToShow[] = $totalPage;
        }
        $data['page_name'] = 'font';
        $data['datas'] = $fonts;
        $data['lastItem'] = $lastItem;
        $data['page'] = $page;
        $data['fields'] = $this->listField();
        $data['pagesToShow'] = $pagesToShow; 
        $data['perPage'] = $perPage;
        $data['totalPage'] = $totalPage;
        $data['firstItem'] = $firstItem;
        $data['nextPageUrl'] = $nextPageUrl;
        $data['previousPageUrl'] = $previousPageUrl;
        $this->load->view('front-end/ajax/show_product', $data);
    }

    public function getDetail($id) {
        $font = file_get_contents("assets/datas/".$id.".txt");
        $font = str_replace('height: 100%;', '', $font);
        echo $font;
    }
}
