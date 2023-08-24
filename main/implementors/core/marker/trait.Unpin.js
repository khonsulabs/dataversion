(function() {var implementors = {
"transmog_async":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_async/struct.AsyncDestination.html\" title=\"struct transmog_async::AsyncDestination\">AsyncDestination</a>",1,["transmog_async::writer::AsyncDestination"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_async/struct.SyncDestination.html\" title=\"struct transmog_async::SyncDestination\">SyncDestination</a>",1,["transmog_async::writer::SyncDestination"]],["impl&lt;TReads, TWrites, TStream, TFormat&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_async/struct.Builder.html\" title=\"struct transmog_async::Builder\">Builder</a>&lt;TReads, TWrites, TStream, TFormat&gt;<span class=\"where fmt-newline\">where\n    TFormat: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    TReads: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    TStream: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    TWrites: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>",1,["transmog_async::Builder"]],["impl&lt;TReads, TWrites, TStream, TDestination, TFormat&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_async/struct.TransmogStream.html\" title=\"struct transmog_async::TransmogStream\">TransmogStream</a>&lt;TReads, TWrites, TStream, TDestination, TFormat&gt;<span class=\"where fmt-newline\">where\n    TStream: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>",1,["transmog_async::TransmogStream"]],["impl&lt;W, T, D, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_async/struct.TransmogWriter.html\" title=\"struct transmog_async::TransmogWriter\">TransmogWriter</a>&lt;W, T, D, F&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"],["impl&lt;R, T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_async/struct.TransmogReader.html\" title=\"struct transmog_async::TransmogReader\">TransmogReader</a>&lt;R, T, F&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>"]],
"transmog_bincode":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_bincode/struct.Bincode.html\" title=\"struct transmog_bincode::Bincode\">Bincode</a>",1,["transmog_bincode::Bincode"]]],
"transmog_cbor":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_cbor/struct.Cbor.html\" title=\"struct transmog_cbor::Cbor\">Cbor</a>",1,["transmog_cbor::Cbor"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"transmog_cbor/enum.Error.html\" title=\"enum transmog_cbor::Error\">Error</a>",1,["transmog_cbor::Error"]]],
"transmog_json":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_json/struct.Json.html\" title=\"struct transmog_json::Json\">Json</a>",1,["transmog_json::Json"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"transmog_json/enum.Error.html\" title=\"enum transmog_json::Error\">Error</a>",1,["transmog_json::Error"]]],
"transmog_pot":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_pot/struct.Pot.html\" title=\"struct transmog_pot::Pot\">Pot</a>",1,["transmog_pot::Pot"]]],
"transmog_versions":[["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"transmog_versions/enum.Error.html\" title=\"enum transmog_versions::Error\">Error</a>&lt;E&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</span>",1,["transmog_versions::Error"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"transmog_versions/struct.UnknownVersion.html\" title=\"struct transmog_versions::UnknownVersion\">UnknownVersion</a>",1,["transmog_versions::UnknownVersion"]]],
"xtask":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"xtask/enum.Config.html\" title=\"enum xtask::Config\">Config</a>",1,["xtask::Config"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()