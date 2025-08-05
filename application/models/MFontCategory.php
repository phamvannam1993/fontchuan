<?php

class MFontCategory extends CI_Model {
    protected $table;

    function __construct() {
        parent::__construct();
        $this->table = "font_categories";
    }

    public function insert($data = []) {
        $data["created_at"] = date('Y-m-d H:i:s');
        $data["updated_at"] = date('Y-m-d H:i:s');
        $this->db->insert($this->table, $data);
        return $this->db->insert_id();
    }

    function update($id, $data = []) {
        $data['updated_at'] = date('Y-m-d H:i:s');
        $this->db->where(["id" => $id])->update($this->table, $data);
    }

    public function delete($id) {
        return $this->db->where(["id" => $id])->delete($this->table);
    }

    public function getOneByID($id) {
        $this->db->select('*')->where(["id" => $id]);
        $this->db->from($this->table);
        return $this->db->get()->row_array();
    }

    public function getOneBy($params = []) {
        $query = $this->db->select('*');
        if(isset($params["id"])) {
            $query = $query->where(["id" => $params["id"]]);
        }
        if(isset($params["type_id"])) {
            $query = $query->where(["type_id" => $params["type_id"]]);
        }
        if(isset($params["category_id"])) {
            $query = $query->where(["category_id" => $params["category_id"]]);
        }
        if(isset($params["font_id"])) {
            $query = $query->where(["font_id" => $params["font_id"]]);
        }
        $query->from($this->table);
        return  $query->get()->row();
    }

    public function get($params = []) {
        $this->db->select('*');
        $this->db->from($this->table);
        if(isset($params["limit"]) && isset($params["offset"]))  {
            $this->db->limit($params["limit"], $params["offset"]);
        }
        if(isset($params["search"]))  {
            $this->db->like("name", $params["search"]);
        }
        if(isset($params["category_id"])) {
            $this->db->where(["category_id" => $params["category_id"]]);
        }
        return $this->db->get()->result_array();
    }
    
    public function get_by($params) {
        $query = $this->db->select('*');
        if ($params != '') {
            $query = $query->where($params);
        }
        $query->from($this->table);
        return  $query->get()->row();
    }

    public function count_all()
    {
        return $this->db->count_all($this->table);
    }

    public function get_data($limit, $offset)
    {
        return $this->db->limit($limit, $offset)->get($this->table)->result();
    }

    public function count_fonts($params = []) {
        $this->db->from('fonts');
        $this->db->join('font_categories', 'font_categories.font_id = fonts.id');
        $this->db->join('categories', 'categories.id = font_categories.category_id');
        if (isset($params['category_id'])) {
            $this->db->where('font_categories.category_id', $params['category_id']);
        }

        if (isset($params['search'])) {
            $this->db->like("fonts.name", $params["search"]);
        }
    
        return $this->db->count_all_results();
    }

    public function get_fonts_with_categories($params = []) {
        $limit = $params['limit'];
        $offset = $params['offset'];
        $this->db->select('fonts.*, categories.name as category_name, categories.slug as category_slug');
        $this->db->from('fonts');
        $this->db->join('font_categories', 'font_categories.font_id = fonts.id');
        $this->db->join('categories', 'categories.id = font_categories.category_id');
      
        if (isset($params['category_id'])) {
            $this->db->where('font_categories.category_id', $params['category_id']);
        }

        if (isset($params['search'])) {
            $this->db->like("fonts.name", $params["search"]);
        }
    
        $this->db->limit($limit, $offset);
    
        $query = $this->db->get();
        return $query->result_array();
    }
}
