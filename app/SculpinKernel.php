<?php

use DragoonBoots\DanKeenanSiteBundle\DanKeenanSiteBundle;
use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;

/**
 * Class SculpinKernel
 */
class SculpinKernel extends AbstractKernel
{
    protected function getAdditionalSculpinBundles(): array
    {
        return [
            DanKeenanSiteBundle::class,
        ];
    }
}
