from sys import stdout

# Keywords
KW_print        = 'log'
KW_if           = 'if'

KW_let          = 'define'
KW_assign       = 'value'
KW_import1      = 'import'
KW_import2      = "imports"
KW_def          = 'function'
KW_return1      = 'return'
KW_return2      = 'callback'
KW_try          = 'execute'
KW_except       = 'except'
KW_main         = 'main'
KW_end          = 'end'

KW_break        = 'breaker'
KW_continue     = 'constant'
KW_endless_loop = 'forever'
KW_while_loop   = 'while'

KW_less_than_OP = 'ilt' 
KW_greater_than_OP = 'igt'
KW_greater_or_equals_OP = 'igtoet' 
KW_less_or_equals_OP = 'iltoet'
KW_is_not_OP = 'isNot'
KW_equals_OP = 'equals'

KW_PY = "py:"

keywords = [
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

    KW_PY
]

INDENT_KW = [
KW_if, KW_def, KW_try, KW_except, KW_while_loop, KW_endless_loop
]


# Tokens that the interpreter will totally ignore
ignore_tokens = {'~', "'"}

# Characters in numbers
digits = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'}

# Separators are used in tokenization
separators = {
    '(', ')', '[', ']', '{', '}', ',', '\n', ' ', '+', '-', '*', '/', '%', '^', '='
}

# Operators
operators = {
    '+', '-', '*', '/', '%', '^', '=',
    '[', ']', '(', ')', '{', '}', ',',
    '>', '<', '<=', '>=', '!=', 'is', 'isNot'
}
OP_build_in_functions = {'to_string', 'to_int', 'to_float', 'length'}

def join_list(l):
    return ''.join(map(str, l))
