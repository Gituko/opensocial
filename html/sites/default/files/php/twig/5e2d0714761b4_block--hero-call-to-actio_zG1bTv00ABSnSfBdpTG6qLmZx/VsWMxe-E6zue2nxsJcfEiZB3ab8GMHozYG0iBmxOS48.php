<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* profiles/contrib/social/themes/socialbase/templates/block/block--hero-call-to-action-block.html.twig */
class __TwigTemplate_3a4e3745114da37adee964f931d4492539e2b5f3cccc91c6decfe6e00417d4a3 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 52, "if" => 59, "block" => 68];
        $filters = ["escape" => 49];
        $functions = ["attach_library" => 49];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['escape'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 48
        echo "
";
        // line 49
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("socialbase/hero"), "html", null, true);
        echo "

";
        // line 52
        $context["classes"] = [0 => "cover", 1 => "cover-with-canvas", 2 => ((        // line 55
($context["has_image"] ?? null)) ? ("cover-img") : (""))];
        // line 58
        echo "
";
        // line 59
        if (($context["has_image"] ?? null)) {
            // line 60
            echo "  <div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
            echo " style=\"background-image: url(";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["image_url"] ?? null)), "html", null, true);
            echo ")\">
";
        } else {
            // line 62
            echo "  <div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
            echo ">
";
        }
        // line 64
        echo "
  ";
        // line 65
        if (($context["content"] ?? null)) {
            // line 66
            echo "    <div class=\"cover-wrap\">
      <div class=\"hero-canvas\">
        ";
            // line 68
            $this->displayBlock('content', $context, $blocks);
            // line 71
            echo "      </div>
    </div>
  ";
        }
        // line 74
        echo "
</div>
";
    }

    // line 68
    public function block_content($context, array $blocks = [])
    {
        // line 69
        echo "          ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        echo "
        ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/social/themes/socialbase/templates/block/block--hero-call-to-action-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  111 => 69,  108 => 68,  102 => 74,  97 => 71,  95 => 68,  91 => 66,  89 => 65,  86 => 64,  80 => 62,  72 => 60,  70 => 59,  67 => 58,  65 => 55,  64 => 52,  59 => 49,  56 => 48,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/social/themes/socialbase/templates/block/block--hero-call-to-action-block.html.twig", "/var/www/open/html/profiles/contrib/social/themes/socialbase/templates/block/block--hero-call-to-action-block.html.twig");
    }
}
