<?php

class MFont extends CI_Model {
    protected $table;

    function __construct() {
        parent::__construct();
        $this->table = "fonts";
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
        $query = $this->db->select('id, name, image_url, slug, post_id, posted_by, author, vietnamization, created_at, dowload_link, updated_at, download_url');
        if(isset($params["id"])) {
            $query = $query->where(["id" => $params["id"]]);
        }
        if(isset($params["slug"])) {
            $query = $query->where(["slug" => $params["slug"]]);
        }
        $query->from($this->table);
        return  $query->get()->row();
    }

    public function get($params = []) {
        $this->db->select('id, name, image_url, slug, post_id, posted_by, author, vietnamization, created_at, dowload_link, updated_at, download_url');
        $this->db->from($this->table);
        if(isset($params["limit"]) && isset($params["offset"]))  {
            $this->db->limit($params["limit"], $params["offset"]);
        }
        if(isset($params["search"]))  {
            $this->db->like("name", $params["search"]);
        }
        $this->db->order_by('id', 'ASC');
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

    public function count_all($params = [])
    {
        $query = $this->db;
        if (isset($params["search"])) {
            $query = $query->like("name", $params["search"]);
        }
        $query = $query->from($this->table);
        return $query->count_all_results();
    }

    public function get_data($limit, $offset)
    {
        return $this->db->limit($limit, $offset)->get($this->table)->result();
    }
}
