var searchIndex = JSON.parse('{\
"transmog":{"doc":"Universal data serialization utilities for Rust.","t":[8,16,8,8,10,10,11,11,10,11,0,5],"n":["BorrowedDeserializer","Error","Format","OwnedDeserializer","deserialize_borrowed","deserialize_from","deserialize_owned","serialize","serialize_into","serialized_size","test_util","test_format"],"q":["transmog","","","","","","","","","","","transmog::test_util"],"d":["A deserializer that borrows data when possible.","The error type this format produces.","A serialization format.","A deserializer that does not attempt to borrow data when …","Deserialize <code>T</code> from <code>data</code>, borrowing when possible.","Deserialize <code>T</code> from <code>reader</code>.","Deserialize <code>T</code> from <code>data</code>.","Serialize <code>value</code> into a <code>Vec&lt;u8&gt;</code>.","Serialize <code>value</code> into <code>writer</code>.","Return the number of bytes <code>value</code> will need to be …","Utilities for testing formats. Requires feature <code>test-util</code>.","Perform a simple set of tests on <code>format</code>. These tests are …"],"i":[0,1,0,0,2,3,3,1,1,1,0,0],"f":[null,null,null,null,[[],["result",4]],[[["read",8]],["result",4]],[[],["result",4]],[[],[["vec",3,["u8"]],["result",4,["vec"]]]],[[["write",8]],["result",4]],[[],[["result",4,["option"]],["option",4,["usize"]]]],null,[[]]],"p":[[8,"Format"],[8,"BorrowedDeserializer"],[8,"OwnedDeserializer"]]},\
"transmog_async":{"doc":"Asynchronous access to a Transmog-encoded item stream.","t":[3,3,3,3,3,6,6,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["AsyncDestination","Builder","SyncDestination","TransmogReader","TransmogStream","TransmogTokioTcpReader","TransmogTokioTcpWriter","TransmogWriter","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","buffer","build","default_for","default_for","default_for","fmt","fmt","fmt","fmt","fmt","for_async","for_async","for_async","for_sync","for_sync","for_sync","format","from","from","from","from","from","from","get_mut","get_mut","get_mut","get_ref","get_ref","get_ref","into","into","into","into","into","into","into_inner","into_inner","into_inner","new","new","new","new","poll_close","poll_close","poll_flush","poll_flush","poll_next","poll_next","poll_ready","poll_ready","receives","sends","sends_and_receives","start_send","start_send","tcp_split","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_poll_next","try_poll_next","type_id","type_id","type_id","type_id","type_id","type_id"],"q":["transmog_async","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A marker that indicates that the wrapping type is …","Builder helper to specify types without the need of …","A marker that indicates that the wrapping type is …","A wrapper around an asynchronous reader that produces an …","A wrapper around an asynchronous stream that receives and …","A reader of Transmog-encoded data from a <code>TcpStream</code>.","A writer of Transmog-encoded data to a <code>TcpStream</code>.","A wrapper around an asynchronous sink that accepts, …","","","","","","","","","","","","","Returns a reference to the internally buffered data.","Creates a new instance that sends <code>format</code>-encoded payloads …","Returns a new instance that reads <code>format</code>-encoded data for …","Returns a new instance that sends <code>format</code>-encoded data over …","Creates a new instance that sends <code>format</code>-encoded payloads …","","","","","","Build this stream to include the serialized data’s size …","Make this writer include the serialized data’s size …","Make this stream include the serialized data’s size …","Build this stream only send Transmog-encoded values.","Make this writer only send Transmog-encoded values.","Make this stream only send Transmog-encoded values.","Gets a reference to the underlying format.","","","","","","","Gets a mutable reference to the underlying reader.","Gets a mutable reference to the underlying writer.","Gets a mutable reference to the underlying stream.","Gets a reference to the underlying reader.","Gets a reference to the underlying writer.","Gets a reference to the underlying stream.","","","","","","","Unwraps this <code>TransmogReader</code>, returning the underlying …","Unwraps this <code>TransmogWriter</code>, returning the underlying …","Unwraps this <code>TransmogStream</code>, returning the underlying …","Returns a new stream builder for <code>stream</code> and <code>format</code>.","Returns a new instance that reads <code>format</code>-encoded data for …","Returns a new instance that sends <code>format</code>-encoded data over …","Creates a new instance that sends <code>format</code>-encoded payloads …","","","","","","","","","Sets <code>T</code> as the type of data that is read from this stream.","Sets <code>T</code> as the type of data that is written to this stream.","Sets <code>T</code> as the type for both sending and receiving.","","","Split a TCP-based stream into a read half and a write half.","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,1,2,3,4,5,6,1,2,3,4,5,6,2,6,2,3,6,2,3,4,5,6,1,3,6,1,3,6,3,1,2,3,4,5,6,2,3,6,2,3,6,1,2,3,4,5,6,2,3,6,1,2,3,6,3,6,3,6,2,6,3,6,1,1,1,3,6,6,1,2,3,4,5,6,1,2,3,4,5,6,2,6,1,2,3,4,5,6],"f":[null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["builder",3]],[[]],[[]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[],[["asyncdestination",3],["transmogstream",3,["asyncdestination"]]]],[[],[["transmogwriter",3,["asyncdestination"]],["asyncdestination",3]]],[[],[["asyncdestination",3],["transmogstream",3,["asyncdestination"]]]],[[],[["transmogstream",3,["syncdestination"]],["syncdestination",3]]],[[],[["syncdestination",3],["transmogwriter",3,["syncdestination"]]]],[[],[["transmogstream",3,["syncdestination"]],["syncdestination",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["pin",3],["context",3]],[["poll",4,["result"]],["result",4]]],[[["pin",3],["context",3]],[["poll",4,["result"]],["result",4]]],[[["pin",3],["context",3]],[["poll",4,["result"]],["result",4]]],[[["pin",3],["context",3]],[["poll",4,["result"]],["result",4]]],[[["pin",3],["context",3]],[["option",4],["poll",4,["option"]]]],[[["pin",3],["context",3]],[["option",4],["poll",4,["option"]]]],[[["pin",3],["context",3]],[["poll",4,["result"]],["result",4]]],[[["pin",3],["context",3]],[["poll",4,["result"]],["result",4]]],[[],["builder",3]],[[],["builder",3]],[[],["builder",3]],[[["pin",3]],["result",4]],[[["pin",3]],["result",4]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["pin",3],["context",3]],[["poll",4,["option"]],["option",4,["result"]]]],[[["pin",3],["context",3]],[["poll",4,["option"]],["option",4,["result"]]]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[3,"Builder"],[3,"TransmogReader"],[3,"TransmogWriter"],[3,"AsyncDestination"],[3,"SyncDestination"],[3,"TransmogStream"]]},\
"transmog_bincode":{"doc":"Transmog implementation of the Bincode format.","t":[3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Bincode","allow_trailing_bytes","big_endian","borrow","borrow_mut","clone","clone_into","default","deserialize_borrowed","deserialize_from","deserialize_owned","fixed_integer_encoding","from","into","legacy_default","limit","little_endian","native_endian","no_limit","reject_trailing_bytes","serialize","serialize_into","serialized_size","to_owned","try_from","try_into","type_id","variable_integer_encoding"],"q":["transmog_bincode","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Bincode implementor of <code>Format</code> with default options.","Configures Bincode to allow trailing bytes when …","Configures big-endian encoding. See <code>BigEndian</code> for more …","","","","","Returns a <code>Bincode</code> instance initialized using the …","","","","Configures fixed length integer encoding. See …","","","Returns a <code>Bincode</code> instance initialized using the …","Configures bincode to restrict encoding and decoding to …","Configures little-endian encoding. See <code>LittleEndian</code> for …","Configures native-endian encoding. See <code>NativeEndian</code> for …","Configures no byte limit. See <code>Infinite</code> for more …","Configures Bincode to reject trailing bytes when …","","","","","","","","Configures variable length integer encoding. See …"],"i":[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[null,[[]],[[]],[[]],[[]],[[],["bincode",3]],[[]],[[]],[[],["result",4]],[[["read",8]],["result",4]],[[],["result",4]],[[]],[[]],[[]],[[]],[[["u64",15]]],[[]],[[]],[[]],[[]],[[],[["vec",3,["u8"]],["result",4,["vec"]]]],[[["write",8]],["result",4]],[[],[["option",4,["usize"]],["result",4,["option"]]]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]]],"p":[[3,"Bincode"]]},\
"transmog_cbor":{"doc":"Transmog implementation of the CBOR format, powered by the …","t":[3,13,4,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12],"n":["Cbor","Deserialization","Error","Serialization","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","default","deserialize_from","deserialize_owned","fmt","fmt","from","from","from","from","from","into","into","serialize_into","source","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","0","0"],"q":["transmog_cbor","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","transmog_cbor::Error",""],"d":["CBOR implementor of <code>Format</code>.","A deserialization-related error.","CBOR serialization and deserialization errors.","A serialization-related error.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,1,0,1,2,1,2,1,2,2,2,2,2,1,1,2,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,4],"f":[null,null,null,null,[[]],[[]],[[]],[[]],[[],["cbor",3]],[[]],[[],["cbor",3]],[[["read",8]],["result",4]],[[],["result",4]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["error",3],["error",4,["error"]]]],[[["error",3]]],[[["error",4,["error"]],["error",3]]],[[]],[[]],[[["write",8]],["result",4]],[[],[["error",8],["option",4,["error"]]]],[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,null],"p":[[4,"Error"],[3,"Cbor"],[13,"Serialization"],[13,"Deserialization"]]},\
"transmog_json":{"doc":"Transmog implementation of the JSON format, powered by the …","t":[4,13,3,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12],"n":["Error","Io","Json","Json","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","default","deserialize_borrowed","deserialize_from","deserialize_owned","fmt","fmt","from","from","from","from","into","into","pretty","serialize","serialize_into","source","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","0","0"],"q":["transmog_json","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","transmog_json::Error",""],"d":["Errors from <code>Json</code>.","An Io error occurred outside of parsing <code>Json</code>.","Json implementor of <code>Format</code>.","An error occurred from parsing <code>Json</code>.","","","","","","","","","","","","","","","","","","","Returns an instance configured to serialize in a “pretty…","","","","","","","","","","","","",""],"i":[0,1,0,1,2,1,2,1,2,2,2,2,2,2,1,1,2,1,1,1,2,1,2,2,2,1,2,1,2,1,2,1,2,1,3,4],"f":[null,null,null,null,[[]],[[]],[[]],[[]],[[],["json",3]],[[]],[[],["json",3]],[[],["result",4]],[[["read",8]],["result",4]],[[],["result",4]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["error",3]]],[[["error",3]]],[[]],[[]],[[]],[[],[["result",4,["vec"]],["vec",3,["u8"]]]],[[["write",8]],["result",4]],[[],[["error",8],["option",4,["error"]]]],[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,null],"p":[[4,"Error"],[3,"Json"],[13,"Json"],[13,"Io"]]},\
"transmog_pot":{"doc":"Transmog implementation of the Pot format.","t":[3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Pot","borrow","borrow_mut","clone","clone_into","default","deserialize_borrowed","deserialize_from","deserialize_owned","from","from","into","serialize","serialize_into","to_owned","try_from","try_into","type_id"],"q":["transmog_pot","","","","","","","","","","","","","","","","",""],"d":["Pot implementor of <code>Format</code>.","","","","","","","","","","","","","","","","",""],"i":[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[null,[[]],[[]],[[],["pot",3]],[[]],[[],["pot",3]],[[],["result",4]],[[["read",8]],["result",4]],[[],["result",4]],[[]],[[["config",3]]],[[]],[[],[["result",4,["vec"]],["vec",3,["u8"]]]],[[["write",8]],["result",4]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[3,"Pot"]]},\
"transmog_versions":{"doc":"Multi-version/Multi-format support for Transmog.","t":[12,8,4,13,13,3,13,18,8,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,10,5,5,12,12,12],"n":["0","ConstVersioned","Error","Format","Io","UnknownVersion","UnknownVersion","VERSION","Versioned","borrow","borrow","borrow_mut","borrow_mut","decode","fmt","fmt","fmt","fmt","from","from","from","from","into","into","source","to_string","to_string","try_from","try_from","try_into","try_into","type_id","type_id","unwrap_version","version","wrap","write_header","0","0","0"],"q":["transmog_versions","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","transmog_versions::Error","",""],"d":["","A type that has a constant version number.","An error from <code>transmog-versions</code>.","An error occurred from a format.","An io error occurred","An unknown version was encountered.","An unknown version was encountered.","The version of this type.","A type that has a version number.","","","","","Decode a payload that may or may not contain a version …","","","","","","","","","","","","","","","","","","","","Decode a payload that may or may not contain a version …","The version of this value.","Wrap <code>data</code> with a version header for <code>versioned</code>, if needed.","Write a version header for <code>versioned</code>, if needed, to <code>write</code>.","","",""],"i":[1,0,0,2,2,0,2,3,0,2,1,2,1,0,2,2,1,1,2,2,2,1,2,1,2,2,1,2,1,2,1,2,1,0,4,0,0,5,6,7],"f":[null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[["fnonce",8],["read",8]],[["result",4,["error"]],["error",4]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["error",3]]],[[]],[[["unknownversion",3]]],[[]],[[]],[[]],[[],[["option",4,["error"]],["error",8]]],[[],["string",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[],["u64",15]],[[["u8",15],["vec",3,["u8"]]],[["u8",15],["vec",3,["u8"]]]],[[["write",8]],[["error",3],["result",4,["error"]]]],null,null,null],"p":[[3,"UnknownVersion"],[4,"Error"],[8,"ConstVersioned"],[8,"Versioned"],[13,"UnknownVersion"],[13,"Io"],[13,"Format"]]},\
"xtask":{"doc":"","t":[4,11,11,11,11,5,11,11,11,11],"n":["Config","borrow","borrow_mut","from","into","main","paths","try_from","try_into","type_id"],"q":["xtask","","","","","","","","",""],"d":["","","","","","","","","",""],"i":[0,1,1,1,1,0,1,1,1,1],"f":[null,[[]],[[]],[[]],[[]],[[],["result",6]],[[],[["string",3],["vec",3,["string"]]]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]]],"p":[[4,"Config"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};