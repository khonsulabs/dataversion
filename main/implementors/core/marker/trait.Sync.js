(function() {var implementors = {};
implementors["transmog_async"] = [{"text":"impl&lt;R, T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_async/struct.TransmogReader.html\" title=\"struct transmog_async::TransmogReader\">TransmogReader</a>&lt;R, T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["transmog_async::reader::TransmogReader"]},{"text":"impl&lt;W, T, D, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_async/struct.TransmogWriter.html\" title=\"struct transmog_async::TransmogWriter\">TransmogWriter</a>&lt;W, T, D, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["transmog_async::writer::TransmogWriter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_async/struct.AsyncDestination.html\" title=\"struct transmog_async::AsyncDestination\">AsyncDestination</a>","synthetic":true,"types":["transmog_async::writer::AsyncDestination"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_async/struct.SyncDestination.html\" title=\"struct transmog_async::SyncDestination\">SyncDestination</a>","synthetic":true,"types":["transmog_async::writer::SyncDestination"]},{"text":"impl&lt;TReads, TWrites, TStream, TFormat&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_async/struct.Builder.html\" title=\"struct transmog_async::Builder\">Builder</a>&lt;TReads, TWrites, TStream, TFormat&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TFormat: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TReads: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TStream: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TWrites: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["transmog_async::Builder"]},{"text":"impl&lt;TReads, TWrites, TStream, TDestination, TFormat&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_async/struct.TransmogStream.html\" title=\"struct transmog_async::TransmogStream\">TransmogStream</a>&lt;TReads, TWrites, TStream, TDestination, TFormat&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TDestination: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TFormat: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TReads: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TStream: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TWrites: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["transmog_async::TransmogStream"]}];
implementors["transmog_bincode"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_bincode/struct.Bincode.html\" title=\"struct transmog_bincode::Bincode\">Bincode</a>","synthetic":true,"types":["transmog_bincode::Bincode"]}];
implementors["transmog_cbor"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_cbor/struct.Cbor.html\" title=\"struct transmog_cbor::Cbor\">Cbor</a>","synthetic":true,"types":["transmog_cbor::Cbor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"transmog_cbor/enum.Error.html\" title=\"enum transmog_cbor::Error\">Error</a>","synthetic":true,"types":["transmog_cbor::Error"]}];
implementors["transmog_json"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_json/struct.Json.html\" title=\"struct transmog_json::Json\">Json</a>","synthetic":true,"types":["transmog_json::Json"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"transmog_json/enum.Error.html\" title=\"enum transmog_json::Error\">Error</a>","synthetic":true,"types":["transmog_json::Error"]}];
implementors["transmog_pot"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_pot/struct.Pot.html\" title=\"struct transmog_pot::Pot\">Pot</a>","synthetic":true,"types":["transmog_pot::Pot"]}];
implementors["transmog_versions"] = [{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"transmog_versions/enum.Error.html\" title=\"enum transmog_versions::Error\">Error</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["transmog_versions::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"transmog_versions/struct.UnknownVersion.html\" title=\"struct transmog_versions::UnknownVersion\">UnknownVersion</a>","synthetic":true,"types":["transmog_versions::UnknownVersion"]}];
implementors["xtask"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"xtask/enum.Config.html\" title=\"enum xtask::Config\">Config</a>","synthetic":true,"types":["xtask::Config"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()