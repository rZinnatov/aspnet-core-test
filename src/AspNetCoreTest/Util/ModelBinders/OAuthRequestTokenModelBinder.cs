using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using DevDefined.OAuth.Framework;
using ATQB.WebApp.Util.Extensions;

namespace ATQB.WebApp.Util.ModelBinders
{
    public class OAuthRequestTokenModelBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            if (bindingContext.ModelType != typeof(IToken))
            {
                return new Task(() => ModelBindingResult.Failed(""));
            }

            var requestToken = bindingContext.OperationBindingContext.HttpContext.Session.GetRequestToken();
            if (requestToken == null)
            {
                bindingContext.ModelState.AddModelError(bindingContext.ModelName, "RequestToken was not supplied");
            }
            
            return new Task(() => ModelBindingResult.Success(bindingContext.ModelName, requestToken));
        }
    }
}
