<?php

class FCom_FulleronDoc_Frontend_Controller extends FCom_Frontend_Frontend_Controller_Abstract
{
    public function action_index()
    {
        $this->layout('/fdoc');
    }

    public function action_section()
    {
        $area = BRequest::i()->param('area');
        $pageName = $this->viewProxy('fdoc/'.$area, 'index', 'fdoc-section', '/fdoc/section');
        if (!$pageName) {
            $this->forward('noroute');
            return;
        }
        BLayout::i()->hookView('main', 'fdoc/'.$area);
    }

    public function action_noroute()
    {
        $this->layout('/fdoc/404');
    }
}
