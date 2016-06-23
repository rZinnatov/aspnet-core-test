using System;
using System.IO;
using System.Xml.Linq;

namespace ATQB.WebApp.Util.Helpers
{
    public class XmlHelper
    {
        private XDocument _xml;

        public string GetValueByNodeName(string nodeName)
        {
            foreach (var node in _xml.Descendants())
            {
                if (node.Name.LocalName == nodeName)
                {
                    return node.Value;
                }
            }

            throw new Exception($"Cannot find node with name: '{nodeName}'");
        }

        public XmlHelper(string xmlString)
        {
            _xml = null;
            using (var xmlStringReader = new StringReader(xmlString))
            {
                _xml = XDocument.Load(xmlStringReader, LoadOptions.None);
            }

            if (_xml == null)
            {
                throw new Exception("Could not parse XML");
            }
        }
    }
}
