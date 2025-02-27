import Component from '@glimmer/component';
import { cache } from '@ascua/decorators';

export default class extends Component {
	@cache get model() {
		return [
			{
				time: new Date('2023-09-13T00:00:00'),
				name: 'Release v1.0.0',
				path: 'section/releases/v1-0-0',
				link: 'v1.0.0',
				hash: 'v1-0-0',
			},
			{
				time: new Date('2023-09-12T00:00:00'),
				name: 'Release v1.0.0-beta.12',
				path: 'section/releases/v1-0-0-beta-12',
				link: 'v1.0.0-beta.12',
				hash: 'v1-0-0-beta-12',
				data: [
					{
						name: 'Features',
						text: [
							'<code>EXPLAIN</code> command now also explains why it sometimes falls back to a full table iteration.',
							'Add <code>$before</code> and <code>$after</code> params to <code>RETURN</code> clauses.',
							'Add live queries to <code>INFO FOR TB</code> statement.',
							'Support of range queries in the query planner.',
						],
					},
					{
						name: 'Bug fixes',
						text: [
							{
								category: 'bug',
								text: 'Majorly improved error messages.',
							},
							{
								category: 'bug',
								text: 'When a scope fails to authenticate, we now give a detailed explanation as to why.',
							},
							{
								category: 'bug',
								text: 'Ensure parameters are computed before being stored on WebSocket.',
							},
							{
								category: 'bug',
								text: 'Ensure <code>DEFAULT</code> clause is displayed on <code>DEFINE FIELD</code> statements.',
							},
							{
								category: 'bug',
								text: 'Ensure scope <code>SIGNUP</code> and <code>SIGNIN</code> works with guest access disabled.',
							},
							{
								category: 'bug',
								text: 'Fix authentication issues with <code>LIVE SELECT</code> statements.',
							},
							{
								category: 'bug',
								text: 'Support <code>FOR</code> statements inside code blocks.',
							},
							{
								category: 'bug',
								text: 'When a scope fails to authenticate, we now give a detailed explanation as to why.',
							},
							{
								category: 'bug',
								text: 'Cluster bootstrapping now warns and continues instead of fail-stopping',
							},
							{
								category: 'bug',
								text: 'Ensure Live Queries are killed correctly.',
							},
							{
								category: 'bug',
								text: 'Ensure that scripting functions can be used within <code>SELECT</code>-statement predicates.',
							},
							{
								category: 'bug',
								text: 'Avoid panics when displaying errors.',
							},
							{
								category: 'bug',
								text: 'Prevent infinite parser recursion in stmts & binary exprs.',
							},
							{
								category: 'bug',
								text: 'Fix panic on commit when defining db and tb in strict mode.',
							},
							{
								category: 'bug',
								text: 'Fix decimal deserialisation.',
							},
							{
								category: 'bug',
								text: 'Fix change feeds enabled at the database-level.',
							},
							{
								category: 'bug',
								text: 'Allow for multiple indexes on a single field.',
							},
						],
					},
				],
			},
			{
				time: new Date('2023-09-05T00:00:00'),
				name: 'Release v1.0.0-beta.11',
				path: 'section/releases/v1-0-0-beta-11',
				link: 'v1.0.0-beta.11',
				hash: 'v1-0-0-beta-11',
				data: [
					{
						name: 'Features',
						text: [
							'Moved every <code>is::*</code> function to <code>string::is::*</code>.',
							'Introduce new <code>type::is::array</code>, <code>type::is::bool</code>, <code>type::is::bytes</code>, <code>type::is::collection</code>, <code>type::is::datetime</code>, <code>type::is::decimal</code>, <code>type::is::duration</code>, <code>type::is::float</code>, <code>type::is::geometry</code>, <code>type::is::int</code>, <code>type::is::line</code>, <code>type::is::null</code>, <code>type::is::multiline</code>, <code>type::is::multipoint</code>, <code>type::is::multipolygon</code>, <code>type::is::number</code>, <code>type::is::object</code>, <code>type::is::point</code>, <code>type::is::polygon</code>, <code>type::is::record</code>, <code>type::is::string</code>, <code>type::is::uuid</code> type validation methods.',
							'Added <code>X-Forwarded-For</code> header to the accepted headers for the <code>--client-ip</code> option.',
							'Allow all functions to be invoked by default.',
							'Allow any type of value to be used in <code>THROW</code> statements.',
							'Introduce a new <code>ONLY</code> keyword.',
						],
					},
					{
						name: 'Bug fixes',
						text: [
							{
								category: 'bug',
								text: 'Ensure that errors within scope logic are properly handled and do not cause a panic.',
							},
							{
								category: 'bug',
								text: 'Ensure that capabilities are properly applied to embedded scripting functions.',
							},
							{
								category: 'bug',
								text: 'Fix various niche issues caught by fuzzer that could cause a panic.',
							},
							{
								category: 'bug',
								text: 'Fix relative file paths.',
							},
						],
					},
				],
			},
			{
				time: new Date('2023-09-01T00:00:00'),
				name: 'Release v1.0.0-beta.10',
				info: 'section/releases/v1-0-0-beta-10-upgrade',
				path: 'section/releases/v1-0-0-beta-10',
				link: 'v1.0.0-beta.10',
				hash: 'v1-0-0-beta-10',
				data: [
					{
						name: 'Features',
						text: [
							'Introduce Live queries, which allow you to write application with realtime updates pushed to your users.',
							'Introduce Full Text Search, which allows you to efficiently index and search through databases.',
							'Introduce Change feeds, which allow you to retrieve an ordered sequence of changes that happened to your database, enabling you to easily replicate changes.',
							'Introduce strict types into SurrealQL. With this change, types of fields on records can always be guaranteed.',

							'Implemented the HTTP <code>PUT</code> and <code>PATCH</code> methods for complete tables.',
							'Implemented the <code>insert</code> method in the websocket protocol to allow for bulk insertion of records.',
							'Implemented missing JSON Patch operations (move, copy and test).',

							'Introduce a new <code>surreal validate [file]</code> CLI command to validate SurrealQL queries.',
							'Introduce a new <code>--json</code> flag to the <code>surreal sql</code> CLI command to return JSON instead of SurrealQL objects.',
							'Introduce a new <code>--endpoint</code> flag to the <code>surreal version</code> CLI command to check the version of a remote instance.',
							'Introduce a new <code>--query-timeout</code> flag to the <code>surreal start</code> CLI command to limit the maximum execution time of queries.',
							'Introduce a new <code>--client-ip</code> flag to the <code>surreal start</code> CLI command to change the behaviour for detecting client IP-addresses.',
							'Allow multiline queries in the CLI by ending the line with a <code>\\</code> character, then pressing enter.',

							'Added a SpeeDB storage engine implementation.',
							'Add authentication support for local engines',

							'Introduce the ability to allow and deny certain capabilities of SurrealDB.',
							'Introduce the ability to create multiple root-level users.',
							'Introduce basic RBAC functionality.',

							'Introduce the full <code>fetch</code>-suite into our embedded scripting functions.',
							'Introduce a new <code>query</code> function into our embedded scripting functions, enabling the execution of surrealql within them.',
							'Introduce a new <code>value</code> function into our embedded scripting functions, enabling the retrieval of variables from the current execution context.',
							'Expose all built-in SurrealQL methods to the embedded scripting functions.',

							'Introduce a new <code>UNSET</code> clause to remove properties from a document.',
							'Introduce a new <code>DEFAULT</code> clause on field definitions.',
							'Introduce a new <code>OMIT</code> clause to omit certain fields from a selection.',
							'Introduce a new <code>COMMENT</code> clause on all resource definitions, allowing to add a description to such.',
							'The <code>WHEN</code> clause on events is now optional.',

							'Allow segmenting custom function names with multiple <code>::</code> splits.',
							'Allow <code>DEFINE</code> and <code>REMOVE</code> statements to be used within subqueries.',
							'Introduce the ability to reference a object keys by a string, variable or document property.',
							'Introduce the ability to set permissions on <code>PARAM</code>s and custom <code>FUNCTION</code>s.',
							'Introduce a simplified <code>IF-ELSE</code> syntax when using a block as the body.',
							'Change the <code>INFO</code> statement to use full words instead of abbreviations.',

							'Introduce the new <code>FOR</code>, <code>CONTINUE</code>, <code>BREAK</code> and <code>THROW</code> statements.',

							'Introduce new <code>array::slice</code>, <code>array::join</code>, <code>array::clump</code>, <code>array::find</code>, <code>array::boolean_and</code>, <code>array::boolean_or</code>, <code>array::boolean_xor</code>, <code>array::boolean_not</code>, <code>array::logical_and</code>, <code>array::logical_or</code>, <code>array::logical_xor</code>, <code>array::matches</code>, <code>array::retain</code>, <code>array::transpose</code>, <code>array::first</code>, <code>array::last</code> and <code>array::at</code> array methods.',
							'Introduce new <code>string::contains</code>, <code>string::distance::hamming</code>, <code>string::distance::levenshtein</code>, <code>string::similarity::fuzzy</code>, <code>string::similarity::jaro</code>, <code>string::similarity::smithwaterman</code> string methods.',
							'Introduce new <code>vector::add</code>, <code>vector::angle</code>, <code>vector::cross</code>, <code>vector::dot</code>, <code>vector::divide</code>, <code>vector::magnitude</code>, <code>vector::multiply</code>, <code>vector::normalize</code>, <code>vector::project</code>, <code>vector::subtract</code>, <code>vector::distance::chebyshev</code>, <code>vector::distance::euclidean</code>, <code>vector::distance::hamming</code>, <code>vector::distance::mahalanobis</code>, <code>vector::distance::manhattan</code>, <code>vector::distance::minkowski</code>, <code>vector::similarity::cosine</code>, <code>vector::similarity::jaccard</code>, <code>vector::similarity::pearson</code>, <code>vector::similarity::spearman</code> vector methods',
							'Introduce new <code>time::ceil</code>, <code>time::min</code>and <code>time::max</code> time methods.',
							'Introduce a new <code>time::EPOCH</code> constant, containing the unix epoch timestamp as a datetime.',
							'Introduce <code>type::field()</code> and <code>type::fields()</code> methods to dynamically select properties from a resource.',
						],
					},
					{
						name: 'Bug fixes',
						text: [
							{
								category: 'bug',
								text: 'Ensure duration addition and subtraction does not panic.',
							},
							{
								category: 'bug',
								text: 'Ensure custom functions can write to the database without being wrapped in a transaction.',
							},
							{
								category: 'bug',
								text: 'Ensure edge record deletes do not cascade to related records.',
							},
							{
								category: 'bug',
								text: 'Ensure <code>http::*</code> functions parse response bodies as JSON instead of SurrealQL.',
							},
							{
								category: 'bug',
								text: 'Fixed HTTP errors sometimes being unable to be deserialised.',
							},
							{
								category: 'bug',
								text: 'Allow exports larger than 10,240 bytes for local engines.',
							},
							{
								category: 'bug',
								text: 'Fixed an issue where <code>array::remove()</code> would cause a panic.',
							},
							{
								category: 'bug',
								text: 'Ensure <code>string::slice()</code> properly handles UTF-8 values.',
							},
							{
								category: 'bug',
								text: 'Ensure large duration do not cause a panic.',
							},
							{
								category: 'bug',
								text: 'Prevent infinite recursion with futures causing an overflow.',
							},
							{
								category: 'bug',
								text: 'Ensure chained <code>future</code> values have access to current document context.',
							},
							{
								category: 'bug',
								text: 'Ensure <code>$input</code> is available to array fields in <code>SET</code> clause',
							},
							{
								category: 'bug',
								text: 'Make computation depth 4X deeper, and configurable via the <code>SURREAL_MAX_COMPUTATION_DEPTH</code> environment variable.',
							},
							{
								category: 'bug',
								text: 'Ensure JSON-like text is trimmed before parsing.',
							},
							{
								category: 'bug',
								text: 'Ensure Idiom paths result in writeable transactions where necessary.',
							},
							{
								category: 'bug',
								text: 'Visibly warn if failed to deserialize websocket response.',
							},
							{
								category: 'bug',
								text: 'Throw an error for invalid patches instead of panicking.',
							},
							{
								category: 'bug',
								text: 'Ensure errors do not hide other results. If any query in a set of queries were to fail in the CLI, only the error would be shown. This is now fixed by including the error in an array of results.',
							},
							{
								category: 'bug',
								text: 'Ensure duration is bigger than zero before truncating and rounding datetime.',
							},
							{
								category: 'bug',
								text: 'Pass on the error that causes a transaction to fail.',
							},
							{
								category: 'bug',
								text: 'Allow custom functions to be defined with an empty body.',
							},
							{
								category: 'bug',
								text: 'Limit output size of all <code>string::*</code> functions to prevent memory exhaustion.',
							},
							{
								category: 'bug',
								text: 'Allow <code>\\</code> escaped characters to be used in embedded scripting functions.',
							},
							{
								category: 'bug',
								text: 'Fixed not being able to select from an array by index, directly after an array filter.',
							},
							{
								category: 'bug',
								text: 'Allow deletions of records on <code>DROP</code> tables.',
							},
							{
								category: 'bug',
								text: 'Allow keywords as ident prefix.',
							},
							{
								category: 'bug',
								text: 'Ensure permissions are enforced on edge <code>in</code> and <code>out</code> fields.',
							},
							{
								category: 'bug',
								text: 'Ensure records can be <code>INSERT</code>ed on tables with permissions.',
							},
							{
								category: 'bug',
								text: 'Ensure foreign tables are deleted fully when removed',
							},
							{
								category: 'bug',
								text: 'Support whitespace between function keyword and argument list for embedded scription functions.',
							},
							{
								category: 'bug',
								text: 'Ensure <code>ON DUPLICATE KEY UPDATE</code> clause is displayed on <code>INSERT</code> statement.',
							},
							{
								category: 'bug',
								text: 'Limit parser depth to prevent exhaustion and overflows.',
							},
							{
								category: 'bug',
								text: 'Prevent being able to create a record with an empty ID.',
							},
							{
								category: 'bug',
								text: 'Throw an error when a record is created with a mismatched record ID.',
							},
							{
								category: 'bug',
								text: 'Support arbitrary number of arrays in <code>array::concat()</code>.',
							},
							{
								category: 'bug',
								text: 'Support <code>ON DUPLICATE KEY UPDATE</code> when a unique index entry exists.',
							},
						],
					},
					{
						name: 'Performance improvements',
						text: [
							{
								category: 'performance',
								text: 'Parsing nested objects and blocks now has an O(n) complexity instead of O(2^n), resulting in a 3666x improvement.',
							},
							{
								category: 'performance',
								text: 'The JSON parser is now 153 times faster.',
							},
						],
					},
				],
			},
			{
				time: new Date('2023-04-01T00:00:00'),
				name: 'Release v1.0.0-beta.9',
				info: 'section/releases/v1-0-0-beta-9-upgrade',
				path: 'section/releases/v1-0-0-beta-9',
				link: 'v1.0.0-beta.9',
				hash: 'v1-0-0-beta-9',
				data: [
					{
						name: 'Features',
						text: [
							'Add WebSocket binary protocol',
							'Don’t treat <code>NONE</code> and <code>NULL</code> as the same',
							'Allow <code>SELECT</code> statements to <code>START AT 0</code>',
							'Add <code>not()</code> function for negating a value',
							'Add support for mathematical constants',
							'Add functionality for open telemetry tracing',
							'Add support for SQL parameters in HTTP REST endpoints',
							'Log release version identifier when starting the server',
							'Add <code>string::is::url()</code> function for checking if a string is a URL',
							'Implement inclusive and unbounded record rangese',
							'Support negative offsets in SQL string::slice() function',
							'Add <code>time::timezone()</code> function for getting the local timezone offset',
							'Add <code>is::datetime()</code> function for checking if a value is a datetime',
							'Add ability to set global parameters using <code>DEFINE PARAM</code> statements',
							'Prevent invalid aggregate functions being used in <code>GROUP BY</code> clauses',
							'Check expressions for <code>SPLIT ON</code>, <code>GROUP BY</code>, and <code>ORDER BY</code> clauses',
							'Enable fetching fields and values from within complex Record IDs',
							'Allow parameters in <code>LIMIT</code> and <code>START</code> clauses in <code>SELECT</code> statements',
							'Add <code>parse::url::scheme()</code> function for parsing a url protocol',
							'Add <code>time::format()</code> function for formatting of datetimes',
							'Add support for <code>FETCH</code> cluases in SQL <code>RETURN</code> statements',
							'Add <code>rand::uuid::v4()</code> and <code>rand::uuid::v7()</code> functions for creating different UUID types',
							'Add Null Coalescing Operator and Ternary Conditional Operator',
							'Enable current input to be retrieved in <code>ON DUPLICATE KEY UPDATE</code> clauses with <code>$input</code> parameter',
							'Add <code>math::pow()</code> function and <code>**</code> operator',
							'Ensure command-line exits with non-zero code on errors',
							'Add <code>IN</code> and <code>NOT IN</code> operators as aliases to <code>INSIDE</code> and <code>NOT INSIDE</code>',
							'Add command-line argument flag to disable SurrealDB banner at server startup',
							'Enable calling SurrealQL functions from within JavaScript scripting runtime',
							'Add support for <code>FLEXIBLE</code> fields on <code>SCHEMAFULL</code> tables',
							'Add additional array functions for array checking, and manipulation: \n - <code>array::all()</code>, <code>array::any()</code>, <code>array::pop()</code> \n - <code>array::add()</code>, <code>array::append()</code>, <code>array::insert()</code>, <code>array::prepend()</code>, <code>array::push()</code> \n - <code>array::remove()</code>, <code>array::reverse()</code>,  <code>array::group()</code>, <code>array::complement()</code>',
						],
					},
					{
						name: 'Bug fixes',
						text: [
							{
								category: 'bug',
								text: 'Enable searching within Record IDs using the CONTAINS operator',
							},
							{
								category: 'bug',
								text: 'Ensure date strings are not treated as datetimes',
							},
							{
								category: 'bug',
								text: 'Limit computation depth in functions, futures, and subqueries',
							},
							{
								category: 'bug',
								text: 'Ensure SQL queries are parsed completely or fail',
							},
							{
								category: 'bug',
								text: 'Ensure all valid unicode characters are parsed without failing',
							},
							{
								category: 'bug',
								text: 'Ensure nested non-defined objects are not stored in <code>SCHEMAFULL</code> tables',
							},
							{
								category: 'bug',
								text: 'Ensure equals comparator function never reeaches unreachable code',
							},
							{
								category: 'bug',
								text: 'Ensure cancelled context does not prevent FETCH of records',
							},
							{
								category: 'bug',
								text: 'Ensure GROUP BY fields with functions are output correctly',
							},
							{
								category: 'bug',
								text: 'Ensure system parameters are not able to be overridden',
							},
							{
								category: 'bug',
								text: 'Ensure record is only deleted after permissions have been checked',
							},
							{
								category: 'bug',
								text: 'Ensure double quote characters are always escaped properly',
							},
							{
								category: 'bug',
								text: 'Ensure RocksDB range scans are inclusive at the start',
							},
							{
								category: 'bug',
								text: 'Ensure uncaught JavaScript exceptions are caught in JavaScript runtime',
							},
							{
								category: 'bug',
								text: 'Do not run permissions on <code>DEFINE EVENT</code> and <code>DEFINE TABLE</code> queries',
							},
							{
								category: 'bug',
								text: 'Ensure invalid datetimes to not panic',
							},
						],
					},
					{
						name: 'Performance improvements',
						text: [
							{
								category: 'performance',
								text: 'Limit computation depth in functions, futures, and subqueries',
							},
							{
								category: 'performance',
								text: 'Ensure PERMISSIONS clauses are not run for ROOT / NS / DB users',
							},
						],
					},
				],
			},
			{
				time: new Date('2022-09-30T23:00:00'),
				name: 'Release v1.0.0-beta.8',
				path: 'section/releases/v1-0-0-beta-8',
				link: 'v1.0.0-beta.8',
				hash: 'v1-0-0-beta-8',
				data: [
					{
						name: 'Features',
						text: [
							'Improve HTTP request error messages',
							'Add support for dynamic expressions in Record IDs',
							'Add support for <code>PERMISSIONS</code> clauses to be separated by commas or spaces',
							'Allow deep-merging in <code>UPDATE ... MERGE</code> statements',
							'Add debug and trace logging for authentication attempts',
							'Make validation and parsing functions more robust with certain edge cases',
							'Ignore empty or blank lines when using the SurrealDB SQL REPL',
							'Use a dedicated executor thread for CPU-intensive functions',
							'Ensure server listens to, and gracefully exits, on SIGINT/SIGTERM signals',
							'Add <code>duration</code> functions for calculating durations as specific units',
							'Add support for calculating the duration between two datetime values',
							'Improve error message when automatically creating a table without authorization',
							'Add support for uppercase and lowercase object keys in JWT authentication tokens',
							'Allow namespaced claim aliases in JWT token using full domain-specific key names',
							'Add support for retrieving JWT authentication token contents using <code>$token</code> parameter',
							'Add support for different content return types on <code>/signup</code> and <code>/signin</code> HTTP routes',
							'Add <code>session::token()</code> function for retrieving the contents of the JWT authentication token',
							'Ensure <code>NONE</code> and <code>NULL</code> values are not automatically cast to another type when updating records',
							'Add <code>/health</code> HTTP endpoint for checking the database and data storage engine status',
							'Add <code>crypto::bcrypt::generate()</code> and <code>crypto::bcrypt::compare()</code> functions',
							'Improve error messages for unique indexes, when inserting records which already exist in the index',
							'Add <code>meta::tb()</code> and <code>meta::id()</code> functions for retrieving separate parts of a SurrealDB Record ID',
							'Add support for using 3rd party authentication JWTs with <code>DEFINE TOKEN ... ON SCOPE ...</code>',
						],
					},
					{
						name: 'Bug fixes',
						text: [
							{
								category: 'bug',
								text: 'Add support for escaped characters and unicode characters in strings',
							},
							{
								category: 'bug',
								text: 'Ensure datetimes work correctly in Eastern timezones',
							},
							{
								category: 'bug',
								text: 'Ensure <code>is::uuid()</code> parses valid UUIDs correctly',
							},
							{
								category: 'bug',
								text: 'Ensure <code>LET</code> statements throw errors correctly on failure',
							},
							{
								category: 'bug',
								text: 'Ensure Record IDs are parsed correctly when defined as a string',
							},
							{
								category: 'bug',
								text: 'Fix bug where escaped characters were not supported in regex values',
							},
							{
								category: 'bug',
								text: 'Ensure datetimes with milliseconds or nanoseconds are parsed correctly',
							},
							{
								category: 'bug',
								text: 'Ensure datetimes with partial timezones are correctly calculated',
							},
							{
								category: 'bug',
								text: 'Ensure <code>time::month()</code> returns the month of the specified datetime',
							},
							{
								category: 'bug',
								text: 'Ensure <code>FETCH</code> clauses fetch the respective data correctly',
							},
							{
								category: 'bug',
								text: 'Handle connection errors properly when WebSocket clients disconnect improperly',
							},
							{
								category: 'bug',
								text: 'Ensure HTTP session is not verified multiple times when requesting an invalid HTTP route',
							},
							{
								category: 'bug',
								text: 'Use <code>Accept</code> header instead of <code>Content-Type</code> header for client content negotiation',
							},
							{
								category: 'bug',
								text: 'Fix key scan range iteration in RocksDB, which caused SurrealDB to randomly crash',
							},
							{
								category: 'bug',
								text: 'Ensure authenticated session data is stored after successful scope signup / signin',
							},
							{
								category: 'bug',
								text: 'Fix bug where <code>http</code> functions would panic when an invalid URI was specified',
							},
							{
								category: 'bug',
								text: 'Ensure correct transaction type (optimistic / pessimistic) was initiated when using TiKV distributed storage engine',
							},
							{
								category: 'bug',
								text: 'Ensure <code>math::mean()</code>, <code>math::median()</code>, and <code>math::sqrt()</code> work correctly with empty or zero values',
							},
							{
								category: 'bug',
								text: 'Fix bug where <code>MultiPoint</code>, <code>MultiLine</code>, and <code>MultiPolygon</code> geometry values were not formatted correctly',
							},
							{
								category: 'bug',
								text: 'Fix bug where defined fields with empty values would be set on the root object, losing the object structure',
							},
						],
					},
					{
						name: 'Performance improvements',
						text: [
							{
								category: 'performance',
								text: 'Miscellaneous performance optimizations and code cleanup',
							},
							{
								category: 'performance',
								text: 'Limit maximum allowed runtime and memory in JavaScript functions',
							},
							{
								category: 'performance',
								text: 'Ensure <code>crypto</code> and <code>rand</code> functions do not allow unbounded resource usage',
							},
							{
								category: 'performance',
								text: 'Ensure read-only transactions are used when write functionality is not needed when using TiKV distributed storage engine',
							},
						],
					},
				],
			},
			{
				time: new Date('2022-08-29'),
				name: 'Release v1.0.0-beta.7',
				path: 'section/releases/v1-0-0-beta-7',
				link: 'v1.0.0-beta.7',
				hash: 'v1-0-0-beta-7',
				text: [
					'Add a Windows <code>amd64</code> release build',
					'Add support for Objects and Arrays as Record IDs',
					'Add support for querying records using Record ID ranges',
					'Add SQL <code>session</code> functions for retrieving session variables',
					'Make <code>--ns</code> and <code>--db</code> arguments optional in command-line REPL',
					'Return an error when the specified datastore is not able to be initiated',
					'Enable root authentication for client libraries using WebSocket protocol',
					'Ensure <code>math::sum()</code> returns a number instead of a <code>NONE</code> value, when called on a non-array value',
					'Add ACID compliant, persistent, on-disk storage implementation, with multiple concurrent writers using RocksDB',
				],
			},
			{
				time: new Date('2022-08-13'),
				name: 'Release v1.0.0-beta.6',
				path: 'section/releases/v1-0-0-beta-6',
				link: 'v1.0.0-beta.6',
				hash: 'v1-0-0-beta-6',
				text: [
					'Add command-line SurrealQL REPL for quick querying of a database',
					'Log username at server startup when root authentication is enabled',
					'Enable SurrealDB server to be configured using environment variables',
					'Implement config definition key and value caching within a transaction',
					'Add <code>array::sort</code> functions for sorting of arrays and array fields',
					'Ensure an error is returned when selecting from a non-existent table in strict mode',
					'Allow polymorphic remote record constraints in <code>DEFINE FIELD</code> statements',
					'Fix bug with SQL export, where <code>DEFINE INDEX</code> statements were not exported',
					'Fix bug where multi-yield path expressions with multiple alias outputs were returning nested arrays',
					'Fix bug where aliased field was not output when fetching a multi-yield expressions with a final alias yield',
				],
			},
			{
				time: new Date('2022-08-01'),
				name: 'Release v1.0.0-beta.5',
				path: 'section/releases/v1-0-0-beta-5',
				link: 'v1.0.0-beta.5',
				hash: 'v1-0-0-beta-5',
				text: [
					'Temporarily disable HTTP response compression',
					'Improve <code>surreal import</code> and <code>surreal export</code> cli commands',
					'Fix bug where <code>GROUP BY</code> fields with an alias <code>AS</code> name were not output correctly',
					'Fix SQL syntax parsing bug when specifying <code>DEFINE INDEX</code> statements with <code>UNIQUE</code> constraints',
				],
			},
			{
				time: new Date('2022-07-28'),
				name: 'Release v1.0.0-beta.4',
				path: 'section/releases/v1-0-0-beta-4',
				link: 'v1.0.0-beta.4',
				hash: 'v1-0-0-beta-4',
				text: [
					'Add new strict mode to SurrealDB server',
					'Ensure default table permissions are set to <code>NONE</code> not <code>FULL</code>',
					'Fix bug when defining <code>NS</code> and <code>DB</code> without first selecting a <code>NS</code> or <code>DB</code>',
					'Fix bug with <code>VALUE</code> and <code>ASSERT</code> clauses in <code>DEFINE FIELD</code> statements when fields are not present in query',
				],
			},
			{
				time: new Date('2022-07-24'),
				name: 'Release v1.0.0-beta.3',
				path: 'section/releases/v1-0-0-beta-3',
				link: 'v1.0.0-beta.3',
				hash: 'v1-0-0-beta-3',
				text: [
					'Enable years as a unit in durations (<code>1y</code>)',
					'Log root authentication configuration status on server startup',
					'Ensure CORS headers are set on all HTTP responses even when request fails with an error',
					'Improve syntax for defining futures: <code>fn::future -></code> changed to <code>&lt;future&gt;</code>',
					'Improve syntax for defining embedded functions: <code>fn::script -> () =></code> changed to <code>function()</code>',
					'Ensure root authentication is completely disabled when <code>-p</code> or <code>--pass</code> cli arguments are not specified',
				],
			},
			{
				time: new Date('2022-07-20'),
				name: 'Release v1.0.0-beta.2',
				path: 'section/releases/v1-0-0-beta-2',
				link: 'v1.0.0-beta.2',
				hash: 'v1-0-0-beta-2',
				text: [
					'Improve command-line logging output',
					'Enable new <code>--log</code> argument for specifying server log level',
					'Hide default randomly-generated server password',
					'Ensure correct version is displayed when running <code>surreal version</code> command',
				],
			},
			{
				time: new Date('2022-07-18'),
				name: 'Release v1.0.0-beta.1',
				path: 'section/releases/v1-0-0-beta-1',
				link: 'v1.0.0-beta.1',
				hash: 'v1-0-0-beta-1',
				text: [
					'Entire SurrealDB codebase re-written in Rust',
					'Single-node, in-memory storage for development use',
					'Highly-available, highly-scalable distributed storage for production use',
					'Improved SurrealQL query language with faster parsing, and embedded inspection of types',
					'Performance improvements with data parsing, and serialization and deserialization of records',
					'Added support for casting and converting between different data types',
					'Added a new data type for storing values which should only be computed in the future when selected for output',
					'Embedded JavaScript functions for writing complex functions and triggers, with runtime context isolation',
					'Addition of nested GeoJSON data types, including <code>Point</code>, <code>Line</code>, <code>Polygon</code>, <code>MultiPoint</code>, <code>MultiLine</code>, <code>MultiPolygon</code>, and <code>Collection</code> values',
				],
			},
			{
				time: new Date('2021-12-14'),
				name: 'Release v0.3.0',
				path: 'section/releases/v0-3-0',
				link: 'v0.3.0',
				hash: 'v0-3-0',
				text: [
					'Enable query and session parameters to be defined on a JSON-RPC connection',
					'Ensure subqueries can access encoding parent query and grand-parent queries',
					'Add diff-match-patch functionality when updating document records',
					'Separate authentication levels for Namespace and Database specific access',
					'Authentication scope definition and setup, with user-defined authentication logic for each scope',
				],
			},
			{
				time: new Date('2021-01-21'),
				name: 'Release v0.2.0',
				path: 'section/releases/v0-2-0',
				link: 'v0.2.0',
				hash: 'v0-2-0',
				text: [
					'Parameters can be used to store values or result sets',
					'Nested subquery functionality, with scoped parameters',
					'Nested field query notation allowing nested arrays and objects to be queried',
					'Mathematical operators for complex mathematical calculations in queries',
					'Advanced functions for working with arrays, strings, time, validation, parsing, and counting',
				],
			},
			{
				time: new Date('2019-12-08'),
				name: 'Release v0.1.0',
				path: 'section/releases/v0-1-0',
				link: 'v0.1.0',
				hash: 'v0-1-0',
				text: [
					'Multi-tenancy data separation, with namespaces and databases',
					'Schemafull or schemaless tables with limitless  document fields',
					'Multi-table, multi-row, serialisable ACID transactions',
					'Table fields, table change events, table indexes, and data constraints',
					'Advanced data model including empty values, strings, numbers, objects, arrays, durations, and datetimes',
				],
			},
		];
	}
}
