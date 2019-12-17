(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Rp4N:function(e,t,a){"use strict";a.r(t);var n=a("zBv9"),l=a("Wbzz"),r=a("q1tI"),s=a.n(r),o=a("TJpk"),c=a("rCNW"),i=a("w+gZ"),m="Generating C# code from Avro schemas";t.default=function(){var e=n.data.site.siteMetadata,t=e.latestRelease,a=e.projectName;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.Helmet,null,s.a.createElement("title",null,m)),s.a.createElement("h1",null,m),s.a.createElement("p",null,a," is capable of generating rudimentary C# class and enum definitions to match Avro’s record and enum schemas. If you have a complex Avro schema, but no matching .NET type, code generation can save a lot of time."),s.a.createElement("h2",null,"Getting started"),s.a.createElement("p",null,"If you haven’t already, install the ",a," CLI:"),s.a.createElement(c.a,{language:"shell"},"$ dotnet tool install Chr.Avro.Cli --global\nTool 'chr.avro.cli' (version '"+t+"') was successfully installed."),s.a.createElement("p",null,"After the CLI tool has been installed, you can invoke it using ",s.a.createElement("code",null,"dotnet avro"),". If the install command fails, make sure you have the latest version of the ",s.a.createElement(i.a,{to:"https://dotnet.microsoft.com/download"},".NET Core SDK")," installed."),s.a.createElement("h2",null,"Using the CLI"),s.a.createElement("p",null,"To generate code for a schema, use the ",s.a.createElement(l.a,{to:"/cli#generate"},s.a.createElement(c.a,{inline:!0,language:"shell"},"generate"))," command:"),s.a.createElement(c.a,{language:"shell"},"$ dotnet avro generate --id 42 --registry-url http://registry:8081\nnamespace ExampleNamespace\n{\n    public class ExampleClass\n    {\n        public long LongProperty { get; set; }\n\n        public string StringProperty { get; set; }\n    }\n}"),s.a.createElement("p",null,"Generated enums and classes are grouped by namespace. In the future, it may be possible to customize generated names and write out results to individual files."))}},zBv9:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"latestRelease":"3.2.0","projectName":"Chr.Avro"}}}}')}}]);
//# sourceMappingURL=component---src-pages-guides-cli-generate-js-7363378026be37af23b8.js.map