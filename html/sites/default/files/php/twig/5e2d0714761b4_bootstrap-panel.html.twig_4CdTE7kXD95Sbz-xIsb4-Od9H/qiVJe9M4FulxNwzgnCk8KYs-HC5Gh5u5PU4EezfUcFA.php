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

/* profiles/contrib/social/themes/socialbase/templates/card/bootstrap-panel.html.twig */
class __TwigTemplate_ae969dce810a0c583c655aff2a83bb638dae37921cee7c6e13ee1d73782cbd90 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'heading' => [$this, 'block_heading'],
            'body' => [$this, 'block_body'],
            'footer' => [$this, 'block_footer'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 47, "if" => 56, "block" => 57];
        $filters = ["clean_class" => 50, "escape" => 53];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'escape'],
                []
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
        // line 1
        echo "
";
        // line 45
        echo "
";
        // line 47
        $context["classes"] = [0 => "card", 1 => ((        // line 49
($context["collapsible"] ?? null)) ? ("panel") : ("")), 2 => (((        // line 50
($context["collapsible"] ?? null) && ($context["errors"] ?? null))) ? ("panel-danger") : (("panel-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["panel_type"] ?? null))))))];
        // line 53
        echo "<fieldset ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">

  ";
        // line 56
        echo "  ";
        if (($context["heading"] ?? null)) {
            // line 57
            echo "    ";
            $this->displayBlock('heading', $context, $blocks);
            // line 66
            echo "  ";
        }
        // line 67
        echo "
  ";
        // line 69
        echo "  ";
        $this->displayBlock('body', $context, $blocks);
        // line 102
        echo "
  ";
        // line 104
        echo "  ";
        if (($context["footer"] ?? null)) {
            // line 105
            echo "    ";
            $this->displayBlock('footer', $context, $blocks);
            // line 113
            echo "  ";
        }
        // line 114
        echo "
</fieldset>
";
    }

    // line 57
    public function block_heading($context, array $blocks = [])
    {
        // line 58
        echo "      <h4 class=\"card__title card__title--underline\">
          ";
        // line 59
        if (($context["collapsible"] ?? null)) {
            // line 60
            echo "            <a";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading_attributes"] ?? null)), "html", null, true);
            echo " href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["target"] ?? null)), "html", null, true);
            echo "\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading"] ?? null)), "html", null, true);
            echo "</a>
          ";
        } else {
            // line 62
            echo "            <div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading_attributes"] ?? null)), "html", null, true);
            echo ">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading"] ?? null)), "html", null, true);
            echo "</div>
          ";
        }
        // line 64
        echo "      </h4>
    ";
    }

    // line 69
    public function block_body($context, array $blocks = [])
    {
        // line 70
        echo "    ";
        // line 71
        $context["body_classes"] = [0 => "card__block", 1 => ((        // line 73
($context["collapsible"] ?? null)) ? ("panel-collapse") : ("")), 2 => ((        // line 74
($context["collapsible"] ?? null)) ? ("collapse") : ("")), 3 => ((        // line 75
($context["collapsible"] ?? null)) ? ("fade") : ("")), 4 => (((        // line 76
($context["errors"] ?? null) || (($context["collapsible"] ?? null) &&  !($context["collapsed"] ?? null)))) ? ("in") : (""))];
        // line 79
        echo "    ";
        // line 80
        $context["description_classes"] = [0 => "help-block", 1 => (((        // line 82
($context["description"] ?? null) && ($this->getAttribute(($context["description"] ?? null), "position", []) == "invisible"))) ? ("sr-only") : (""))];
        // line 85
        echo "
    ";
        // line 86
        if (($context["errors"] ?? null)) {
            // line 87
            echo "      <div class=\"alert alert-danger\" role=\"alert\">
        <strong>";
            // line 88
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null)), "html", null, true);
            echo "</strong>
      </div>
    ";
        }
        // line 91
        echo "
    <div";
        // line 92
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["body_attributes"] ?? null), "addClass", [0 => ($context["body_classes"] ?? null)], "method")), "html", null, true);
        echo ">
      ";
        // line 93
        if ((($context["description"] ?? null) && ($this->getAttribute(($context["description"] ?? null), "position", []) == "before"))) {
            // line 94
            echo "        <p";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["description"] ?? null), "attributes", []), "addClass", [0 => ($context["description_classes"] ?? null)], "method")), "html", null, true);
            echo ">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["description"] ?? null), "content", [])), "html", null, true);
            echo "</p>
      ";
        }
        // line 96
        echo "      ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["body"] ?? null)), "html", null, true);
        echo "
      ";
        // line 97
        if (((($context["description"] ?? null) && ($this->getAttribute(($context["description"] ?? null), "position", []) == "after")) || ($this->getAttribute(($context["description"] ?? null), "position", []) == "invisible"))) {
            // line 98
            echo "        <p";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["description"] ?? null), "attributes", []), "addClass", [0 => ($context["description_classes"] ?? null)], "method")), "html", null, true);
            echo ">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["description"] ?? null), "content", [])), "html", null, true);
            echo "</p>
      ";
        }
        // line 100
        echo "    </div>
  ";
    }

    // line 105
    public function block_footer($context, array $blocks = [])
    {
        // line 106
        echo "      ";
        // line 107
        $context["footer_classes"] = [0 => "card__actionbar"];
        // line 111
        echo "      <div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["footer_attributes"] ?? null), "addClass", [0 => ($context["footer_classes"] ?? null)], "method")), "html", null, true);
        echo ">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null)), "html", null, true);
        echo "</div>
    ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/social/themes/socialbase/templates/card/bootstrap-panel.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  212 => 111,  210 => 107,  208 => 106,  205 => 105,  200 => 100,  192 => 98,  190 => 97,  185 => 96,  177 => 94,  175 => 93,  171 => 92,  168 => 91,  162 => 88,  159 => 87,  157 => 86,  154 => 85,  152 => 82,  151 => 80,  149 => 79,  147 => 76,  146 => 75,  145 => 74,  144 => 73,  143 => 71,  141 => 70,  138 => 69,  133 => 64,  125 => 62,  115 => 60,  113 => 59,  110 => 58,  107 => 57,  101 => 114,  98 => 113,  95 => 105,  92 => 104,  89 => 102,  86 => 69,  83 => 67,  80 => 66,  77 => 57,  74 => 56,  68 => 53,  66 => 50,  65 => 49,  64 => 47,  61 => 45,  58 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/social/themes/socialbase/templates/card/bootstrap-panel.html.twig", "/var/www/open/html/profiles/contrib/social/themes/socialbase/templates/card/bootstrap-panel.html.twig");
    }
}
