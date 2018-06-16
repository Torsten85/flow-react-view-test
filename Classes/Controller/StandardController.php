<?php
namespace Yeebase\Test\Controller;

use Neos\Flow\Mvc\Controller\ActionController;
use Yeebase\React\Core\View\ReactView;

class StandardController extends ActionController
{
    /**
     * @var string
     */
    protected $defaultViewObjectName = ReactView::class;

    /**
     *
     */
    public function indexAction()
    {
        $this->view->assign('test', 'hello');
    }

    /**
     *
     */
    public function detailAction()
    {
        $this->view->assign('test', 'detail!');
    }
}
