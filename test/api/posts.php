<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        /*
        $POST only supports
        - application/x-www-form-urlencoded 
        - multipart/form-data
        Therefore, use 'php://input' for application/json
        */

        /* 
        * json_decode
        * - Adding the true returns the result as an array and not an stdClass
        */
        $data = file_get_contents('php://input');
        sleep(1);
        echo createPost(json_decode($data, true));
        return ;
    }

    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        echo getPosts();
        return ;
    }

    function getPosts() {
        $arr = [
            array(
                'id' => 1,
                'body' => 'watashi wa kowai yo',
            ),
            array(
                'id' => 2,
                'body' => 'boku wa kowai yo',
            )
        ];
    
        return json_encode($arr);
    }

    function createPost($data) {
        // header('Content-Type: application/json');
        if(postValidate($data)) {
            $arr = [
                array(
                    'id' => 1,
                    'body' => 'watashi wa kowai yo',
                ),
                array(
                    'id' => 2,
                    'body' => 'boku wa kowai yo',
                ),
                array(
                    'id' => $data['id'],
                    'body' => $data['body']
                ),
            ];
    
            return json_encode($arr);
        }
        
        return json_encode([
            'errorMessage' => 'Something went wrong!',
        ]);
    }

    function postValidate($data) {
        if(isset($data['id']) && isset($data['body'])) {
            return true;
        }
        return false;
    }
?>
