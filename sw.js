const CACHE_NAME = "stardew-wasm-v1";
const ASSETS_TO_CACHE = [
	"./",
	"./index.html",
	"./game.js",
	"./_framework/dotnet.js",
	"./_framework/dotnet.native.vgmtf3jg2i.js",
	"./_framework/dotnet.runtime.2hocyfcbj2.js",
	"./_framework/blazor.boot.json",
	"./_framework/dotnet.native.k0dnmixusv.wasm",
	"./_framework/dotnet.native.k0dnmixusv.wasm.count",
	"./_framework/dotnet.native.k0dnmixusv.wasm0",
	"./_framework/dotnet.native.k0dnmixusv.wasm1",
	"./_framework/dotnet.native.k0dnmixusv.wasm2",
	"./_framework/FNA.19mbt6y4zi.wasm",
	"./_framework/mscorlib.emnk2ck1oc.wasm",
	"./_framework/stardew.mlmc2d2oiq.wasm",
	"./_framework/icudt_CJK.tjcz0u77k5.dat",
	"./_framework/icudt_EFIGS.tptq2av103.dat",
	"./_framework/icudt_no_CJK.lfu7j35m59.dat",
	"./_framework/System.Collections.Concurrent.qlhbjf9bos.wasm",
	"./_framework/System.Collections.ds5bgcrsdt.wasm",
	"./_framework/System.Collections.NonGeneric.5ryvt8698k.wasm",
	"./_framework/System.Collections.Specialized.tmjmwnow7m.wasm",
	"./_framework/System.ComponentModel.5keg7c7hvo.wasm",
	"./_framework/System.ComponentModel.Primitives.bm6ff8kzw2.wasm",
	"./_framework/System.ComponentModel.TypeConverter.cn42j6wulu.wasm",
	"./_framework/System.Console.l99dsd4m11.wasm",
	"./_framework/System.Core.hbtpiioy7n.wasm",
	"./_framework/System.Data.HashFunction.Core.t7f9cy4ve8.wasm",
	"./_framework/System.Data.HashFunction.Interfaces.osqgeneoh8.wasm",
	"./_framework/System.Data.HashFunction.xxHash.3x25n82v9o.wasm",
	"./_framework/System.Diagnostics.DiagnosticSource.y73u0d5hpg.wasm",
	"./_framework/System.Diagnostics.StackTrace.ckqu3su6df.wasm",
	"./_framework/System.Diagnostics.TraceSource.5xvfalz2uw.wasm",
	"./_framework/System.dqfxtvioy0.wasm",
	"./_framework/System.IO.FileSystem.DriveInfo.vbzmyb4uon.wasm",
	"./_framework/System.Linq.Expressions.a1ekmxa1x7.wasm",
	"./_framework/System.Linq.hpp1e2tx80.wasm",
	"./_framework/System.Net.Http.9945t64114.wasm",
	"./_framework/System.Net.NameResolution.y8ux167r4l.wasm",
	"./_framework/System.Net.NetworkInformation.wwt8ybvxyv.wasm",
	"./_framework/System.Net.Primitives.7jtotj7lx8.wasm",
	"./_framework/System.Net.Requests.xoa992kozt.wasm",
	"./_framework/System.Net.Sockets.zuwg69fdmh.wasm",
	"./_framework/System.Net.WebHeaderCollection.e4ybain77t.wasm",
	"./_framework/System.Numerics.o4368phbk9.wasm",
	"./_framework/System.ObjectModel.t7b51rllx3.wasm",
	"./_framework/System.Private.CoreLib.i8z3vksxlw.wasm",
	"./_framework/System.Private.Uri.d0kivwxqf4.wasm",
	"./_framework/System.Private.Xml.1op9gajsl5.wasm",
	"./_framework/System.Reflection.Emit.Lightweight.6xjxglsw9x.wasm",
	"./_framework/System.Runtime.InteropServices.9p381fkygi.wasm",
	"./_framework/System.Runtime.InteropServices.JavaScript.zpx83ctob5.wasm",
	"./_framework/System.Runtime.Numerics.ptgadehh8b.wasm",
	"./_framework/System.Runtime.ryq7dzr77n.wasm",
	"./_framework/System.Runtime.Serialization.Formatters.j6cxnl7v8o.wasm",
	"./_framework/System.Security.Cryptography.xa1zdy1r7q.wasm",
	"./_framework/System.Text.Encoding.Extensions.qunib489dc.wasm",
	"./_framework/System.Text.RegularExpressions.aj81zx8ihl.wasm",
	"./_framework/System.Threading.p7kqw56j1g.wasm",
	"./_framework/System.Threading.Thread.qjvwg8fg4h.wasm",
	"./_framework/System.Xml.ReaderWriter.jdtq43bqu8.wasm",
	"./_framework/System.Xml.XmlSerializer.e5uisw7343.wasm"
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(ASSETS_TO_CACHE);
		})
	);
});

self.addEventListener("fetch", (event) => {
	// Skip large assets as they are handled by OPFS in game.js
	if (event.request.url.includes("Content.tar") || event.request.url.includes("ContentAudio.tar")) {
		return;
	}

	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
