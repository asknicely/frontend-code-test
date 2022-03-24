<?php

namespace App\Doctrine;

use App\Entity\Todo;
use App\Entity\User;
use Symfony\Component\Security\Core\Security;

class SetUserListener
{

    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function prePersist($obj)
    {
        if (!is_a($obj, Todo::class) ||
            $obj->getCreatedBy() ||
            !($user = $this->security->getUser()) ||
            !($user instanceof User)) {
            return;
        }

        $obj->setCreatedBy($user);
    }
}
