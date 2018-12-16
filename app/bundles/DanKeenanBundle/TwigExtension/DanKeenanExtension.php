<?php

namespace DragoonBoots\DanKeenanBundle\TwigExtension;

use Sculpin\Contrib\ProxySourceCollection\ProxySourceItem;

class DanKeenanExtension extends \Twig_Extension
{

    /**
     * {@inheritdoc}
     */
    public function getFilters()
    {
        return [
            new \Twig_SimpleFilter('slugify', [$this, 'slugify']),
        ];
    }

    /**
     * Convert the title into a slug.
     *
     * Use the user-defined slug first, otherwise build one the same way the
     * permalink factory does.
     *
     * @param string|ProxySourceItem|null $item
     * @param string                      $space
     *   The character to replace spaces with
     *
     * @return string|null
     *
     * @throws \UnexpectedValueException
     *   Thrown when $item is not a string or ProxySourceItem
     */
    public function slugify($item, string $space = '-'): ?string
    {
        if (is_null($item)) {
            return null;
        } elseif (is_a($item, ProxySourceItem::class)) {
            // Use the user-defined slug first, otherwise build one the same way
            // the permalink factory does.
            $slug = $item->data()->get('slug');
            if (!$slug) {
                $slug = $this->slugifyString($item->title(), $space);
            }
        } elseif (is_string($item)) {
            $slug = $this->slugifyString($item, $space);
        } else {
            $itemType = gettype($item);
            if ($itemType === 'object') {
                $itemType = get_class($item);
            }
            throw new \UnexpectedValueException(sprintf('Item passed to slugify filter must be a ProxySourceItem or a string, "%s" passed instead,', $itemType));
        }

        return $slug;
    }

    /**
     * Create a slug the same way the permalink factory does.
     *
     * @param string $title
     * @param string $space
     *   The character to replace spaces with
     *
     * @return string
     */
    private function slugifyString(string $title, string $space)
    {
        $title = trim($title);
        $title = preg_replace('`[^a-zA-Z0-9\s'.preg_quote($space, '`').']`', '', $title);
        $title = strtolower($title);
        $title = preg_replace('`[\s.'.preg_quote($space, '`').']+`', $space, $title);

        return $title;
    }
}
