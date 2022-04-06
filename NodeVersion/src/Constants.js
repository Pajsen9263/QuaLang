const KW_print = "log";
const KW_if = "if";

const KW_let = "define";
const KW_assign = "value";
const KW_import1 = "import";
const KW_import2 = "done";
const KW_def = "function";
const KW_return1 = "return";
const KW_return2 = "callback";
const KW_try = "execute";
const KW_except = "except";
const KW_main = "main";
const KW_end = "end";

const KW_break = "breaker";
const KW_continue = "constant";
const KW_endless_loop = "forever";
const KW_while_loop = "while";

const KW_less_than_OP = "ilt";
const KW_greater_than_OP = "igt";
const KW_greater_or_equals_OP = "igtoet";
const KW_less_or_equals_OP = "iltoet";
const KW_is_not_OP = "isNot";
const KW_equals_OP = "is";

const TT_keyword = "KEYWORDS";
const TT_operator = "OPERATORS";
const TT_number = "VALUE-NUMBER";
const TT_bool = "VALUE-BOOL";
const TT_string = "VALUE-STRING";
const TT_int = "VALUE-INT";
const TT_list = "VALUE-LIST";
const TT_float = "VALUE-FLOAT";

const TT_arguments = "ARGUMENTS";
const TT_variable = "VARIABLE";
const TT_function = "FUNCTION";
const TT_library = "LIBRARY";
const TT_build_in_funcs = "BUILD-IN-FUNCS";
const TT_identifier = "IDENTIFIER";

const keywords = [
  KW_print,
  KW_if,
  KW_let,
  KW_assign,
  KW_import1,
  KW_import2,
  KW_def,
  KW_return1,
  KW_return2,
  KW_try,
  KW_except,
  KW_main,
  KW_end,
  KW_break,
  KW_continue,
  KW_endless_loop,
  KW_while_loop,
  KW_less_than_OP,
  KW_greater_than_OP,
  KW_greater_or_equals_OP,
  KW_less_or_equals_OP,
  KW_is_not_OP,
  KW_equals_OP,
];

const ignore_tokens = ["~", "'"];

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

const separators = [
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  ",",
  "\n",
  "\r",
  " ",
  "+",
  "-",
  "*",
  "/",
  "%",
  "^^",
  "=",
  "<<",
  ">>",
  "&",
  "|",
  "^",
  ">?",
  ">>>",
];

const operators = [
  "+",
  "-",
  "*",
  "/",
  "%",
  "^",
  "=",
  "<<",
  ">>",
  "&",
  "|",
  "!",
  ">?",
  "[",
  "]",
  "(",
  ")",
  "{",
  "}",
  ",",
];

const OP_build_in_functions = ["to_string", "to_int", "to_float", "length"];

module.exports = {
  KW_print,
  KW_if,
  KW_let,
  KW_assign,
  KW_import1,
  KW_import2,
  KW_def,
  KW_return1,
  KW_return2,
  KW_try,
  KW_except,
  KW_main,
  KW_end,
  KW_break,
  KW_continue,
  KW_endless_loop,
  KW_while_loop,
  KW_less_than_OP,
  KW_greater_than_OP,
  KW_greater_or_equals_OP,
  KW_less_or_equals_OP,
  KW_is_not_OP,
  KW_equals_OP,
  TT_keyword,
  TT_operator,
  TT_number,
  TT_bool,
  TT_string,
  TT_int,
  TT_list,
  TT_float,
  TT_arguments,
  TT_variable,
  TT_function,
  TT_library,
  TT_build_in_funcs,
  TT_identifier,
  keywords,
  ignore_tokens,
  digits,
  separators,
  operators,
  OP_build_in_functions,
};
