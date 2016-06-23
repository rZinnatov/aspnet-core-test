using ATQB.WebApp.Util.Factories;
using ATQB.WebApp.Util.Settings;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Linq;
//using MySql.Data.Entity;
//using System.Data.Entity;

namespace ATQB.WebApp.Util.Extensions
{
    public static class ServicesExtensions
    {
        public static void ApplyAtqbConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<Data>(o => configuration.GetSection(nameof(Data)));
            services.Configure<OAuthSettings>(o => configuration.GetSection(nameof(OAuthSettings)));
            services.Configure<QbConnectorSettings>(o => configuration.GetSection(nameof(QbConnectorSettings)));

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            //DbConfiguration.SetConfiguration(new MySqlEFConfiguration());
        }
        public static void AddAtqbFrameworks(this IServiceCollection services)
        {
            services.AddMvc((options) =>
            {
                var jsonFormatter = (JsonOutputFormatter)options.OutputFormatters.FirstOrDefault(f => f is JsonOutputFormatter);
                if (jsonFormatter != null)
                {
                    jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                }
            });
            services.AddOptions();
            //services.AddCaching();
            services.AddSession();

            // <--Swagger -->
            //services.AddSwaggerGen();
            //services.ConfigureSwaggerSchema(o => o.CustomSchemaIds(t => t.AssemblyQualifiedName));
            // </-Swagger -->
        }
        public static void ResolveAtqbDependencies(this IServiceCollection services, IConfiguration configuration)
        {
            var oAuthSettings = services.BuildServiceProvider().GetService<OAuthSettings>();

            // <-- TODO: WARN: Connectors are singletons -->
            services.AddScoped(sp => sp.GetService<Services.AtConnectorProviderService>().GetActiTime());
            services.AddSingleton<Connectors.QB.IQbConnector, Connectors.QB.QbConnector>();
            // <-- Connectors are singletons -->
            

            services.AddSingleton<AtConnectorFactory>();

            services.AddSingleton(sp => AutoMapperFactory.Build());
            //services.AddScoped(sp => ConnectionFactory.Build(configuration));


            // <-- Services -->
            services.AddScoped<Services.ImportService>();
            services.AddScoped<Services.MappingRulesService>();
            services.AddScoped<Services.TimeTrackCompressionService>();

            services.AddSingleton<Services.AtConnectorProviderService>();
            // </- Services -->
        }
    }
}
