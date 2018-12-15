<?php

use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;

/**
 * Class SculpinKernel
 */
class SculpinKernel extends AbstractKernel
{

    /**
     * {@inheritdoc}
     */
    protected function getAdditionalSculpinBundles()
    {
        return [
            DragoonBoots\DanKeenanBundle\DragoonBootsDanKeenanBundle::class,
        ];
    }
}
