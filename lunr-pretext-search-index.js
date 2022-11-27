var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "copyright "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and functions",
  "body": "Sets and functions \n      We will gradually make our way to definitions of the vector spaces and linear transformations mentioned in this text's title. For now it will suffice to observe that a vector space is a certain kind of  set , and a linear transformation is a special type of  function . Accordingly we gather here some notions about sets and functions that will come in handy once we meet the two main players of linear algebra.\n     Sets sets sets empty sets sets membership     set membership Sets set member element \n      We use curly braces to describe the contents of a set. For example,   is the set containing the first three positive integers, and   is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated:  ,  ,  , and   are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.\n     Set equality sets equality equal \n      Set membership naturally extends to a notion of one set  lying  within another.\n     Set inclusion (subsets) sets subset sets inclusion set inclusion subset set inclusion \n          The definitions of set equality and the subset relation make use of two important logical operations: namely, the  if and only if  (or  iff  for short) and  if-then  operations.\n         \n      With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.\n     Set-builder notation sets set builder notation \n        Let   be a set, and let   be a property that elements of   either satisfy or do not satisfy. For an element  , let   denote the statement that   satisfies  .  The set of all elements of   satisfying   is denoted\n         .\n         \n          Set builder notation   is parsed from left to right as follows:\n           \n               \n                  is read as  the set of \n               \n             \n                 \n                    is read as  elements of  \n                 \n               \n                 \n                    is read as  such that \n                 \n               \n                 \n                    is read as   is true  .\n                 \n               \n          Taken altogether we get:  The set of elements of   such that   is true .\n         \n          Let   be the set of nonnegative integers. The subset   of  even  positive integers can be described using set-builder notation as\n           ,\n          or alternatively,\n           .\n             \n      Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.\n     Basic set operations sets union sets intersection set union set intersection sets complement sets difference      set difference \n        Let   and   be subsets of a common set  .\n         \n               Set union \n             union \n           \n               Set intersection \n             intersection \n           \n               Set difference \n             difference \n           \n  With the help of these set operations, we can now describe some common sets used in mathematics.\n sets empty set   the empty set real numbers the real numbers integers the integers rational numbers the rational numbers Common mathematical sets integers rational numbers empty set \n  Lastly, we define the  cartesian product  of sets, which is a formal description of an ordered collection of objects.\n Cartesian product     Cartesian product Cartesian product -tuple sequence length -th entry (Cartesian) product -ary Cartesian product \n     We have more suggestive names for  -tuples when   is small: a 2-tuple   is called a pair, a 3-tuple   is called a triple, a 4-tuple   is called a quadruple,  . We will use the generic term  tuple  to designate a  -tuple of unspecified length.\n     \n  Observe how tuples capture the notion of an  ordered  collection of object. For example, whereas the sets   and   are all equal to one another, the 4-tuples   and   are not: they differ in their second entries.\n \n  What about the tuples   and  ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like  , although unofficially we consider these two objects as completely different. You should think of   and   as creatures living on two different planets in the universe of tuples.\n Functions Functions function a function from   to  function from   to  input output image of   under  value of   at    maps sends domain codomain \n              When we wish to indicate what rule defines the function, we use the elaborated notation\n               .\n              This is read as  The function   with domain   and codomain   maps an input   to the output  .\n             \n                Consider the function\n                 .\n                This function has domain and codomain equal to   and maps an integer to its square.\n               Arithmetic operations as functions \n                Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function\n                 \n                and multiplication is the function\n                 \n               \n              Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets   and  , we define a function   to be a subset   satisfying the following property: for all   there is a unique element  . The uniqueness of the pair   then allows us to define the value   of   at   as  , denoted  .\n             \n        As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.\n         Function equality function equality equal Image of a set function image of a set function image image of the set   under  image of a function  image of   under  image of  Injective, surjective, bijective invertible function bijective function injective function surjective function one-to-one function onto function one-to-one correspondence injective one-to-one surjective onto bijective one-to-one correspondence Role of domain and codomain in injectivity and surjectivity \n          Consider the following three functions\n           .\n          Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function   is neither injective ( ) nor surjective ( ); the function   is injective but not surjective; the function   is both injective and surjective, hence bijective.\n         Function composition function composition the composition of   and  composition of   and  function invertible function inverse function identity Identity and inverse functions identity function invertible \n      The function   in this case is called the  inverse  of  , denoted  .\n     Invertible is equivalent to bijective \n          A function   is invertible if and only if it is bijective.\n         "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": "sets sets empty sets sets membership     set membership Sets set member element "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": "Set equality sets equality equal "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": "Set inclusion (subsets) sets subset sets inclusion set inclusion subset set inclusion "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": "\n          The definitions of set equality and the subset relation make use of two important logical operations: namely, the  if and only if  (or  iff  for short) and  if-then  operations.\n         "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": "Set-builder notation sets set builder notation \n        Let   be a set, and let   be a property that elements of   either satisfy or do not satisfy. For an element  , let   denote the statement that   satisfies  .  The set of all elements of   satisfying   is denoted\n         .\n         "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": "\n          Set builder notation   is parsed from left to right as follows:\n           \n               \n                  is read as  the set of \n               \n             \n                 \n                    is read as  elements of  \n                 \n               \n                 \n                    is read as  such that \n                 \n               \n                 \n                    is read as   is true  .\n                 \n               \n          Taken altogether we get:  The set of elements of   such that   is true .\n         "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "\n          Let   be the set of nonnegative integers. The subset   of  even  positive integers can be described using set-builder notation as\n           ,\n          or alternatively,\n           .\n             "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Basic set operations.",
  "body": "Basic set operations sets union sets intersection set union set intersection sets complement sets difference      set difference \n        Let   and   be subsets of a common set  .\n         \n               Set union \n             union \n           \n               Set intersection \n             intersection \n           \n               Set difference \n             difference \n           "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": "sets empty set   the empty set real numbers the real numbers integers the integers rational numbers the rational numbers Common mathematical sets integers rational numbers empty set "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Cartesian product.",
  "body": "Cartesian product     Cartesian product Cartesian product -tuple sequence length -th entry (Cartesian) product -ary Cartesian product "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_sets_functions.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.1.11",
  "title": "",
  "body": "\n     We have more suggestive names for  -tuples when   is small: a 2-tuple   is called a pair, a 3-tuple   is called a triple, a 4-tuple   is called a quadruple,  . We will use the generic term  tuple  to designate a  -tuple of unspecified length.\n     "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.12",
  "title": "",
  "body": "\n  Observe how tuples capture the notion of an  ordered  collection of object. For example, whereas the sets   and   are all equal to one another, the 4-tuples   and   are not: they differ in their second entries.\n \n  What about the tuples   and  ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like  , although unofficially we consider these two objects as completely different. You should think of   and   as creatures living on two different planets in the universe of tuples.\n "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_sets_functions.html#d_function",
  "type": "Definition",
  "number": "0.1.13",
  "title": "Functions.",
  "body": "Functions function a function from   to  function from   to  input output image of   under  value of   at    maps sends domain codomain \n              When we wish to indicate what rule defines the function, we use the elaborated notation\n               .\n              This is read as  The function   with domain   and codomain   maps an input   to the output  .\n             "
},
{
  "id": "example-2",
  "level": "2",
  "url": "s_sets_functions.html#example-2",
  "type": "Example",
  "number": "0.1.14",
  "title": "",
  "body": "\n                Consider the function\n                 .\n                This function has domain and codomain equal to   and maps an integer to its square.\n               "
},
{
  "id": "example-3",
  "level": "2",
  "url": "s_sets_functions.html#example-3",
  "type": "Example",
  "number": "0.1.15",
  "title": "Arithmetic operations as functions.",
  "body": "Arithmetic operations as functions \n                Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function\n                 \n                and multiplication is the function\n                 \n               "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_sets_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.1.16",
  "title": "",
  "body": "\n              Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets   and  , we define a function   to be a subset   satisfying the following property: for all   there is a unique element  . The uniqueness of the pair   then allows us to define the value   of   at   as  , denoted  .\n             "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Function equality.",
  "body": "Function equality function equality equal "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_sets_functions.html#d_image",
  "type": "Definition",
  "number": "0.1.18",
  "title": "Image of a set.",
  "body": "Image of a set function image of a set function image image of the set   under  image of a function  image of   under  image of  "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.1.19",
  "title": "Injective, surjective, bijective.",
  "body": "Injective, surjective, bijective invertible function bijective function injective function surjective function one-to-one function onto function one-to-one correspondence injective one-to-one surjective onto bijective one-to-one correspondence "
},
{
  "id": "example-4",
  "level": "2",
  "url": "s_sets_functions.html#example-4",
  "type": "Example",
  "number": "0.1.20",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": "Role of domain and codomain in injectivity and surjectivity \n          Consider the following three functions\n           .\n          Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function   is neither injective ( ) nor surjective ( ); the function   is injective but not surjective; the function   is both injective and surjective, hence bijective.\n         "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.1.21",
  "title": "Function composition.",
  "body": "Function composition function composition the composition of   and  composition of   and  "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.1.22",
  "title": "Identity and inverse functions.",
  "body": "function invertible function inverse function identity Identity and inverse functions identity function invertible \n      The function   in this case is called the  inverse  of  , denoted  .\n     "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.1.23",
  "title": "Invertible is equivalent to bijective.",
  "body": "Invertible is equivalent to bijective \n          A function   is invertible if and only if it is bijective.\n         "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Logic",
  "body": "Logic \n    When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section addresses Different logical connectors give rise to different proof approaches. For the rest of this section, the symbols   and   will stand for propositions.\n\n   Propositional logic \n    A  proposition  is a sentence that is either true or false. We build  compound propositions  from component propositions using  logical operators  (or  logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.\n   Logical operators negation of  conjuction disjunction implication equivalence logically equivalent \n        A  truth table  of a compound proposition   is a concise way of displaying how the truth value of   depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions.  As illustration, we give the truth tables for the logical operators defined above:\n         \n       \n      Use a truth table to find all truth value assignments of   and   making the compound proposition\n       \n      false.\n     \n      We construct a truth table with columns for  ,  ,  ,  , and  :\n       .\n      We conclude that   is false exactly when   is false and   is true. (It follows that   is equivalent to  . )\n     \n      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely,  mathematical  discourse. They do not always agree with their use in natural language: hence the modifier  logical  in their titles.\n     For example, disjunctions in natural language of the form   or   are often understood to be true when   is true or   is true,  but not both . This notion of disjunction is called the  exclusive or  in logic, in contrast to the standard logical or.\n   Similarly, according to our definition, the implication\n       \n      If the President of the US is a dog, then the Vice President of the US is a cat\n     \n    is true, since the proposition  The President of the US is a dog  is false. (In logic we say the implication is  vacuously true  in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both  The President of the US is a dog  and  The Vice President of the US is a cat  are false.\n   Predicate logic \n    Propositions like  All humans are mortal  and  Every positive real number has a square-root  are modeled in logic in the form  For all  ,   and  For all  , there exists an   such that  , where   stands for the phrase   is mortal  and   stands for the phrase   is a square-root of  . Observe that   and   on their own are not propositions; there is no truth value to   is mortal \n    or   is a square-root of  . Instead, we think of   and   as  functions  which return propositions when evaluated at a specific choice for  , or for   and  . For example, evaluating   at   yields the proposition  Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating   at    yields the proposition   is a square-root of 2 , which happens to be false. In logic    and   are called  propositional functions  (also called   predicates ):\n    functions whose outputs are propositions.\n   \n    The propositions  For all  ,   and  For all  , there exists an   such that   are obtained from   and   by\n     bounding \n    them with a series of  quantifiers  ( ,  for all  ,  there exists an  ). The definition below allows us to assign truth values to such propositions.\n   domain of discourse \n           Universal quantifier \n           universal quantification \n         \n           Existential quantifier \n           existential quantification \n         Truth depends on domain of discourse \n        Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.\n       For example, let   be  x>0 . If we declare  , then the proposition   is true, since by definition every   is positive. On the other hand,  if we declare  , the proposition   is false since not all elements of   are positive: indeed,   is negative, making   false.\n     \n      Because of the important role played by the domain of discourse  , we sometimes include it in our quantifier expressions:  ,  ,  .  Using this convention allows us to see more immediately that    is true and   is false.\n     Modeling  Every positive number has a square-root \n    Model the sentence  Every positive real number has a square-root  in the form  , where   is a propositional function with domain of discourse  . Determine the truth value of   using  .\n     \n      Fix our domain of discourse to be  . For any  , let   be the proposition that   is a square-root of  . Define   to be the propositional function\n       .\n      Thus for any  ,   is the proposition that if   is positive, then   has a square-root. It follows that   is the proposition that for all real numbers  , if   is positive, then    has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.\n     \n    Lastly, we use   to show   is true. Take any  . The real number   is either positive or not positive. If   is not positive, then   is false and hence  , which is the implication  , is true vacuously.  If   is positive, then   is true, and   is true, since   has a square-root in this case: namely,  . But if   is true and   is true, then the implication   is true. We have proved   is true for all  . Thus   is true.\n     Order of quantifiers matters \n    As   illustrates, we can take a propositional function   in two variables and quantify one of the two variables to obtain a propositional function in one variable:  ,   or  . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!\n    For example, letting   be   is a square-root of   with domain of discourse  . The proposition   says that every positive real number has a positive square-root (true); the proposition   says that there is a positive real number that is the square-root of all real numbers (false).\n   \n    In general to  unpack  a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.\n   Negating quantifiers \n    Let   be a propositional function with domain of discourse  . According to   a universal quantification   is false if it is  not the case  that   is true for all for all  ; that is, if there is some   such that   is false. Letting   be the propositional function defined as   for all  , we see that   is false if and only if   is true. This proves the equivalence\n     .\n    Similarly, we have\n     .\n    These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow:  swap quantifiers and negate the predicate. \n     \n  The example below taken from calculus nicely illustrates how to negate  a proposition that involves a sequence of quantifiers.\n The limit does not exist \n      Let   be a function with domain  , and let   be a point of this domain. By definition, the proposition that   exists is equivalent to the following proposition:\n       .\n      (We made a number of shortcuts in our logical notation above (   ,  ) in order to simplify the expression somewhat; the intended meaning should still be clear. )\n     \n      Use the negation rules described in   to derive a similar proposition equivalent to the statement that   do not exist.\n     \n      Let   be the proposition in  .\n      Using the negation rules in series, we derive the  chain of equivalences   below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are  swapped  each time we pass the negation to the right.\n       .\n      (The last link in our chain uses the fact that   is equivalent to  , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every   there is an   such that for all   there exists an   satisfying   and  . Quite a mouthful!\n     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Logical operators.",
  "body": "Logical operators negation of  conjuction disjunction implication equivalence logically equivalent "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.2.2",
  "title": "",
  "body": "\n        A  truth table  of a compound proposition   is a concise way of displaying how the truth value of   depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions.  As illustration, we give the truth tables for the logical operators defined above:\n         \n       "
},
{
  "id": "example-5",
  "level": "2",
  "url": "s_logic.html#example-5",
  "type": "Example",
  "number": "0.2.3",
  "title": "",
  "body": "\n      Use a truth table to find all truth value assignments of   and   making the compound proposition\n       \n      false.\n     \n      We construct a truth table with columns for  ,  ,  ,  , and  :\n       .\n      We conclude that   is false exactly when   is false and   is true. (It follows that   is equivalent to  . )\n     "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "\n      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely,  mathematical  discourse. They do not always agree with their use in natural language: hence the modifier  logical  in their titles.\n     For example, disjunctions in natural language of the form   or   are often understood to be true when   is true or   is true,  but not both . This notion of disjunction is called the  exclusive or  in logic, in contrast to the standard logical or.\n   Similarly, according to our definition, the implication\n       \n      If the President of the US is a dog, then the Vice President of the US is a cat\n     \n    is true, since the proposition  The President of the US is a dog  is false. (In logic we say the implication is  vacuously true  in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both  The President of the US is a dog  and  The Vice President of the US is a cat  are false.\n   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.2.5",
  "title": "",
  "body": "domain of discourse \n           Universal quantifier \n           universal quantification \n         \n           Existential quantifier \n           existential quantification \n         "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.2.6",
  "title": "Truth depends on domain of discourse.",
  "body": "Truth depends on domain of discourse \n        Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.\n       For example, let   be  x>0 . If we declare  , then the proposition   is true, since by definition every   is positive. On the other hand,  if we declare  , the proposition   is false since not all elements of   are positive: indeed,   is negative, making   false.\n     \n      Because of the important role played by the domain of discourse  , we sometimes include it in our quantifier expressions:  ,  ,  .  Using this convention allows us to see more immediately that    is true and   is false.\n     "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.2.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": "Modeling  Every positive number has a square-root \n    Model the sentence  Every positive real number has a square-root  in the form  , where   is a propositional function with domain of discourse  . Determine the truth value of   using  .\n     \n      Fix our domain of discourse to be  . For any  , let   be the proposition that   is a square-root of  . Define   to be the propositional function\n       .\n      Thus for any  ,   is the proposition that if   is positive, then   has a square-root. It follows that   is the proposition that for all real numbers  , if   is positive, then    has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.\n     \n    Lastly, we use   to show   is true. Take any  . The real number   is either positive or not positive. If   is not positive, then   is false and hence  , which is the implication  , is true vacuously.  If   is positive, then   is true, and   is true, since   has a square-root in this case: namely,  . But if   is true and   is true, then the implication   is true. We have proved   is true for all  . Thus   is true.\n     "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.2.8",
  "title": "Order of quantifiers matters.",
  "body": "Order of quantifiers matters \n    As   illustrates, we can take a propositional function   in two variables and quantify one of the two variables to obtain a propositional function in one variable:  ,   or  . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!\n    For example, letting   be   is a square-root of   with domain of discourse  . The proposition   says that every positive real number has a positive square-root (true); the proposition   says that there is a positive real number that is the square-root of all real numbers (false).\n   \n    In general to  unpack  a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.\n   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.2.9",
  "title": "Negating quantifiers.",
  "body": "Negating quantifiers \n    Let   be a propositional function with domain of discourse  . According to   a universal quantification   is false if it is  not the case  that   is true for all for all  ; that is, if there is some   such that   is false. Letting   be the propositional function defined as   for all  , we see that   is false if and only if   is true. This proves the equivalence\n     .\n    Similarly, we have\n     .\n    These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow:  swap quantifiers and negate the predicate. \n     "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.2.10",
  "title": "The limit does not exist.",
  "body": "The limit does not exist \n      Let   be a function with domain  , and let   be a point of this domain. By definition, the proposition that   exists is equivalent to the following proposition:\n       .\n      (We made a number of shortcuts in our logical notation above (   ,  ) in order to simplify the expression somewhat; the intended meaning should still be clear. )\n     \n      Use the negation rules described in   to derive a similar proposition equivalent to the statement that   do not exist.\n     \n      Let   be the proposition in  .\n      Using the negation rules in series, we derive the  chain of equivalences   below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are  swapped  each time we pass the negation to the right.\n       .\n      (The last link in our chain uses the fact that   is equivalent to  , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every   there is an   such that for all   there exists an   satisfying   and  . Quite a mouthful!\n     "
},
{
  "id": "s_double_integrals_rect",
  "level": "1",
  "url": "s_double_integrals_rect.html",
  "type": "Section",
  "number": "1.1",
  "title": "Double integrals over rectangles",
  "body": "Double integrals over rectangles norm of a partition partition of rectangle partition norm partition pointed partition sample points Rectangles, partitions, pointed partitions partition norm pointed partition sample points Riemann sums in two variables partition pointed Riemann sum Double integral over a rectangle double integral over a rectangle integrable over a rectangle integrable integral Nonintegrable functions \n      The following nonintegrable example highlights the importance of understanding what exactly the  for all  in   quantifies over. Define   as\n       .\n      Let  , and for each   let   be the pointed partition obtained by subdividing the base and height of   equally into   subintervals, with sample points   chosen to lie on the top-right of the  -th subrectangle. It is easy to see that   are both rational for all   (in fact we have   for some integers  ), and hence that   for all  . The corresponding Riemann sum for this pointed partition   is\n       ,\n      since the sum of the areas of the subrectangles is equal to one.  We have   and\n       .\n     \n      Now consider the sequence of pointed partitions   constructed in exactly the same way, except now the sample points   are now chosen so that   is irrational. (Yes, this can be done!) Since now   for all   it follows that we have   for the corresponding Riemann sum, and hence\n       .\n      We have found two sequences of pointed partitions with norm tending to 0 that give rise to two different limits of the corresponding Riemann sums for   over  . We conclude that   is not integrable over  !\n     Integrable over a rectangle \n      In each of the following cases the function   is integrable over the rectangle  :\n     \n         \n            is continuous on  ;\n         \n       \n         \n            is bounded, and   is continuous at all but finitely many points of  ;\n         \n       \n         \n            is bounded, and the set of points in   where   is not continuous is a finite union of smooth curves.\n         \n       \n  Once we know a function   is integrable over a rectangle   (for example by using  ), we know that we can compute this as the limit of any sequence of pointed partitions of   whose norms tend to zero.   outlines a direct way of computing integrals where the intervals defining   are equally partitioned.\n Limit definition of double integral (equal partition) \n    If   is integrable over the rectangle  , one way of computing   is as follows.\n     \n         \n          For each   let   be the partition obtained by dividing   and   into   equal parts. This partitions   into   subrectangles  , each of area  .\n         \n       \n         \n          For each   make any convenient choice of sample points   lying in the subrectangles   of  . As an example, choosing the top right of each rectangle would yield sample points of the form  , where  .\n         \n       \n         \n          Compute the Riemann sum\n           ,\n          and attempt to simplify the summation expression as much as possible.\n         \n       \n         \n          Compute  .\n         \n       Volume between graph and  -plane (rectangular base) volume Volume below graph \n      Let  , and let   be the region lying above the rectangle   and below the graph of  . Compute   using the limit definition of the double integral.\n     \n      First observe that since   is continuous, it is integrable over  , and we can choose any sequence of pointed partitions with norm tending to 0 to compute its integral.\n     Next, for each   let   be the pointed partition obtained by dividing both edges of   into   equal subintervals and choosing as sample points the top-right corner of each rectangle. We have   rectangles in all, each with area  . The sample points are given as\n       .\n      Note that  , as needed.\n     The Riemann sum   corresponding to   is given by\n       .\n      Lastly, we compute\n       .\n\n     Visualizing\/approximating double integrals "
},
{
  "id": "d_rect_partition",
  "level": "2",
  "url": "s_double_integrals_rect.html#d_rect_partition",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Rectangles, partitions, pointed partitions.",
  "body": "norm of a partition partition of rectangle partition norm partition pointed partition sample points Rectangles, partitions, pointed partitions partition norm pointed partition sample points "
},
{
  "id": "d_double_Riemann_sums",
  "level": "2",
  "url": "s_double_integrals_rect.html#d_double_Riemann_sums",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Riemann sums in two variables.",
  "body": "Riemann sums in two variables partition pointed Riemann sum "
},
{
  "id": "d_double_integral_rect",
  "level": "2",
  "url": "s_double_integrals_rect.html#d_double_integral_rect",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Double integral over a rectangle.",
  "body": "Double integral over a rectangle double integral over a rectangle integrable over a rectangle integrable integral "
},
{
  "id": "eg_double_nonintegrable",
  "level": "2",
  "url": "s_double_integrals_rect.html#eg_double_nonintegrable",
  "type": "Example",
  "number": "1.1.4",
  "title": "Nonintegrable functions.",
  "body": "Nonintegrable functions \n      The following nonintegrable example highlights the importance of understanding what exactly the  for all  in   quantifies over. Define   as\n       .\n      Let  , and for each   let   be the pointed partition obtained by subdividing the base and height of   equally into   subintervals, with sample points   chosen to lie on the top-right of the  -th subrectangle. It is easy to see that   are both rational for all   (in fact we have   for some integers  ), and hence that   for all  . The corresponding Riemann sum for this pointed partition   is\n       ,\n      since the sum of the areas of the subrectangles is equal to one.  We have   and\n       .\n     \n      Now consider the sequence of pointed partitions   constructed in exactly the same way, except now the sample points   are now chosen so that   is irrational. (Yes, this can be done!) Since now   for all   it follows that we have   for the corresponding Riemann sum, and hence\n       .\n      We have found two sequences of pointed partitions with norm tending to 0 that give rise to two different limits of the corresponding Riemann sums for   over  . We conclude that   is not integrable over  !\n     "
},
{
  "id": "th_double_integral_rect",
  "level": "2",
  "url": "s_double_integrals_rect.html#th_double_integral_rect",
  "type": "Theorem",
  "number": "1.1.5",
  "title": "Integrable over a rectangle.",
  "body": "Integrable over a rectangle \n      In each of the following cases the function   is integrable over the rectangle  :\n     \n         \n            is continuous on  ;\n         \n       \n         \n            is bounded, and   is continuous at all but finitely many points of  ;\n         \n       \n         \n            is bounded, and the set of points in   where   is not continuous is a finite union of smooth curves.\n         \n       "
},
{
  "id": "proc_double_integral_direct",
  "level": "2",
  "url": "s_double_integrals_rect.html#proc_double_integral_direct",
  "type": "Procedure",
  "number": "1.1.6",
  "title": "Limit definition of double integral (equal partition).",
  "body": "Limit definition of double integral (equal partition) \n    If   is integrable over the rectangle  , one way of computing   is as follows.\n     \n         \n          For each   let   be the partition obtained by dividing   and   into   equal parts. This partitions   into   subrectangles  , each of area  .\n         \n       \n         \n          For each   make any convenient choice of sample points   lying in the subrectangles   of  . As an example, choosing the top right of each rectangle would yield sample points of the form  , where  .\n         \n       \n         \n          Compute the Riemann sum\n           ,\n          and attempt to simplify the summation expression as much as possible.\n         \n       \n         \n          Compute  .\n         \n       "
},
{
  "id": "d_volume_surface_rect",
  "level": "2",
  "url": "s_double_integrals_rect.html#d_volume_surface_rect",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Volume between graph and <span class=\"process-math\">\\(xy\\)<\/span>-plane (rectangular base).",
  "body": "Volume between graph and  -plane (rectangular base) volume "
},
{
  "id": "eg_double_integral_limit",
  "level": "2",
  "url": "s_double_integrals_rect.html#eg_double_integral_limit",
  "type": "Example",
  "number": "1.1.8",
  "title": "Volume below graph.",
  "body": "Volume below graph \n      Let  , and let   be the region lying above the rectangle   and below the graph of  . Compute   using the limit definition of the double integral.\n     \n      First observe that since   is continuous, it is integrable over  , and we can choose any sequence of pointed partitions with norm tending to 0 to compute its integral.\n     Next, for each   let   be the pointed partition obtained by dividing both edges of   into   equal subintervals and choosing as sample points the top-right corner of each rectangle. We have   rectangles in all, each with area  . The sample points are given as\n       .\n      Note that  , as needed.\n     The Riemann sum   corresponding to   is given by\n       .\n      Lastly, we compute\n       .\n\n     "
},
{
  "id": "sage_double_integral_Riemann",
  "level": "2",
  "url": "s_double_integrals_rect.html#sage_double_integral_Riemann",
  "type": "Sage example",
  "number": "1.1.1",
  "title": "Visualizing\/approximating double integrals.",
  "body": "Visualizing\/approximating double integrals "
},
{
  "id": "s_double_iterated_integrals",
  "level": "1",
  "url": "s_double_iterated_integrals.html",
  "type": "Section",
  "number": "1.2",
  "title": "Iterated integrals and Fubini's theorem",
  "body": "Iterated integrals and Fubini's theorem \n    As we saw in  , computing double integrals directly using the limit definition ( ) is rather onerous.  Fubini's theorem  provides us a more convenient means of integrating using iterated integrals.\n   Doubly iterated integral over rectangle iterated integrals Fubini's theorem over rectangles \n      If   is continuous on the rectangle  , then the functions\n       \n      are integrable on   and  , respectively, and we have\n       .\n     Observe that Fubini's theorem tells us two interesting facts: (1) the two  iterated integrals  are equal in value, and (2) in fact both are equal to the  double integral  of   over  .\n \n      Along similar lines, Fubini's theorem gives us two potential ways of computing an integral: integrate  first  with respect to  , and  then  with respect to  ; or integrate  first  with respect to  , and  then  with respect to  . Oftentimes one of these choices will lead to easier integration techniques than the other. Choose wisely!\n     Volume below graph revisited \nLet  , and let   be the region lying above the rectangle   and below the graph of  . Compute   using Fubini's theorem.\n     \n      We have\n       .\n      Phew, this is indeed the same answer we got in  ! For kicks try the other choice of iterated integral:\n       .\n\n     Fubini examples \n      Compute the following integrals using Fubini's theorem.\n     \n         \n           ,  \n         \n         \n            By Fubini's theorem we have\n             .\n            Note that if we integrated with respect to   first we would have needed to use integration by parts.\n           \n       \n         \n           ,  \n         \n         \n            By Fubini's theorem we have\n             .\n            The penultimate equality uses the indefinite integral formula  . See what happens when you first integrate with respect to  .\n           \n       Iterated integrals over rectangle "
},
{
  "id": "d_double_iterated_integral",
  "level": "2",
  "url": "s_double_iterated_integrals.html#d_double_iterated_integral",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Doubly iterated integral over rectangle.",
  "body": "Doubly iterated integral over rectangle iterated integrals "
},
{
  "id": "th_Fubini_rect",
  "level": "2",
  "url": "s_double_iterated_integrals.html#th_Fubini_rect",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "Fubini's theorem over rectangles.",
  "body": "Fubini's theorem over rectangles \n      If   is continuous on the rectangle  , then the functions\n       \n      are integrable on   and  , respectively, and we have\n       .\n     "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "s_double_iterated_integrals.html#remark-10",
  "type": "Remark",
  "number": "1.2.3",
  "title": "",
  "body": "Observe that Fubini's theorem tells us two interesting facts: (1) the two  iterated integrals  are equal in value, and (2) in fact both are equal to the  double integral  of   over  .\n "
},
{
  "id": "rm_Fubini_choose_order",
  "level": "2",
  "url": "s_double_iterated_integrals.html#rm_Fubini_choose_order",
  "type": "Remark",
  "number": "1.2.4",
  "title": "",
  "body": "\n      Along similar lines, Fubini's theorem gives us two potential ways of computing an integral: integrate  first  with respect to  , and  then  with respect to  ; or integrate  first  with respect to  , and  then  with respect to  . Oftentimes one of these choices will lead to easier integration techniques than the other. Choose wisely!\n     "
},
{
  "id": "eg_double_Fubini_confirm",
  "level": "2",
  "url": "s_double_iterated_integrals.html#eg_double_Fubini_confirm",
  "type": "Example",
  "number": "1.2.5",
  "title": "Volume below graph revisited.",
  "body": "Volume below graph revisited \nLet  , and let   be the region lying above the rectangle   and below the graph of  . Compute   using Fubini's theorem.\n     \n      We have\n       .\n      Phew, this is indeed the same answer we got in  ! For kicks try the other choice of iterated integral:\n       .\n\n     "
},
{
  "id": "eg_Fubini_egs",
  "level": "2",
  "url": "s_double_iterated_integrals.html#eg_Fubini_egs",
  "type": "Example",
  "number": "1.2.6",
  "title": "Fubini examples.",
  "body": "Fubini examples \n      Compute the following integrals using Fubini's theorem.\n     \n         \n           ,  \n         \n         \n            By Fubini's theorem we have\n             .\n            Note that if we integrated with respect to   first we would have needed to use integration by parts.\n           \n       \n         \n           ,  \n         \n         \n            By Fubini's theorem we have\n             .\n            The penultimate equality uses the indefinite integral formula  . See what happens when you first integrate with respect to  .\n           \n       "
},
{
  "id": "project-2",
  "level": "2",
  "url": "s_double_iterated_integrals.html#project-2",
  "type": "Sage example",
  "number": "1.2.1",
  "title": "Iterated integrals over rectangle.",
  "body": "Iterated integrals over rectangle "
},
{
  "id": "s_double_integrals_gen",
  "level": "1",
  "url": "s_double_integrals_gen.html",
  "type": "Section",
  "number": "1.3",
  "title": "Double integrals over general regions",
  "body": "Double integrals over general regions \n      We want a theory of integration that works not only over rectangles, but over more general regions of the  -plane.\n     bounded double integral over bounded region integralable over bounded planar region double integral over region  Double integral over bounded region integrable \n        Observe how   cleverly tackles integration of   over a general bounded region   essentially by (a) defining   to be zero outside of   and then (b) using the definition of the double integral over rectangles for any rectangle   containing  . Of course, by extending   in this manner outside of  , we create a function that is most likely not continuous. Indeed, the extended function   is created basically by unceremoniously setting all   values to 0 outside  . This is bound to create some discontinuities along the boundary of our region  .\n       Integrating over general planar region Integrating over general planar region . Made with  GeoGebra . \n        Putting the issue of integrability aside for the moment, we can now generalize our previous notion of volume articulated in  .\n       Volume below graph and over planar region volume \n    The  elementary regions  defined below provide situations where the extended function   from   is guaranteed to be integrable, and furthermore, for which a Fubini-type theorem applies, allowing us to compute the double integral via iterated integrals.\n   Elementary planar region elementary planar region type 1 type 2 Fubini's theorem over elementary planar regions \n      Assume   is continuous on the bounded planar region  .\n       \n           Type 1 \n           \n            If    ,\n              where   are continuous on  , then\n               .\n           \n         \n           Type 2 \n           \n            If    ,\n              where   are continuous on  , then\n               .\n           \n         \n     \n      The notation  :=  appearing in   means that the expression on the left is newly notation that we declare to mean the expression on the right. The notation  =:  is used similarly.\n     Fubini's theorem over elementary planar regions \n      In each case below the given region   is elementary of type 1, type 2, or both. Use   to compute  .\n     \n         \n           ,   region in first quadrant bounded by curves   and  .\n         \n         \n            The region   is both of type 1 and type 2. The figure below indicates some of the details in its type-1 description.\n\n             \n            We have\n             .\n           \n       \n         \n           ,   region bounded by  ,  ,  ,  .\n         \n         \n            The given   is type 1, but not type 2.\n             \n            We have\n             .\n           \n       \n         \n           ,   triangle with vertices  .\n         \n         \n            The region   is of type 1 and 2, and thank goodness for that!\n             \n            Indeed, notice that if we tried to integrate with respect to   first, as in the last two examples, we would get nowhere (by hand). This is because although the function   does indeed have an antiderivative, it does not have one that we can write down in terms of our library of familiar functions. (We say   does not have an  elementary  antiderivative.)\n           \n            However, we can certainly integrate with respect to  , and since   is also of type 2,   allows us to do just that:\n             .\n           \n       Properties of double integrals \n      Assume   and   are integrable over the bounded regions  .\n     \n         Linearity \n         \n          Given any constants  , we have\n           \n         \n       \n         Domination \n         \n             \n              If   on  , then  \n             \n           \n             \n              If   on  , then  .\n             \n           \n       \n         Additivity \n         \n          If  , where   and   are non-overlapping, then\n           .\n         \n       \n         Absolute value \n         \n          The function   is integrable, and we have\n           .\n         \n       Using double integral properties \n      Use symmetry properties of   and   to compute  , where   and   is the planar region bounded by the curves   and  .\n     \n      Here is a diagram of  , which we see is of type 2 and  not  of type 1.\n     \n      One option would be to set up a type-2 iterated integral. We need to find the  -coordinates of the points of intersection of the two curves in order to get the bounds for  . We have\n     .\n    Thus the iterated integral is\n     ,\n    which is not very difficult to compute. On the other hand we see that   is  odd with respect to  , in the sense that  . Furthermore the region   is divided into two symmetric regions   and   based on the  -coordinate of a point being positive or negative.\n   \n    Now using additivity ( ) of the integral, we have the following persuasive looking chain of equalities:\n     .\n    My use of  persuasive  should be a red flag. The question is whether this chain of equalities is actually valid; and this boils down to whether  , as claimed. Here is a graphical argument: we have   on  , and thus   computes the volume   of the solid region above   and below the graph of  ; since  , it follows that   on  , and   computes the same volume   (by symmetry of   and  ); we conclude that\n     .\n    We could make this argument even more persuasive by appealing to the limit definition of the double integral: indeed, the oddness of   with respect to  , and symmetry of   and   allow us to choose sequences of Riemann sums for   and   for both integrals for which   for all  .\n   \n  Our discussion of oddness in   can be generalized to the following result.\n Double integral of even\/odd functions \n      Let   be integrable on the bounded region  .\n     \n         Odd functions \n         \n          If   is odd with respect to   (    for all  ) and   satisfies\n           ,\n          then  .\n         \n         \n          Similarly, if   is odd with respect to   (    for all  ) and   satisfies\n           ,\n          then  .\n         \n       \n         Even functions \n         \n          If   is even with respect to   (    for all  ) and   satisfies\n           ,\n          then  .\n         \n         \n          Similarly, if   is even with respect to   (    for all  ) and   satisfies\n           ,\n          then  .\n         \n       Iterated integrals over elementary regions \n    Sage can compute the iterated integrals appearing in   for regions of type 1 and 2. The cells below compute the first and third integrals from  : the first as over a region of type 1, the second as over a region of type 2.\n   \n    We mentioned that we can't get far by hand integrating   with respect to  , but Sage can handle it.\n   \n   What is  ? You can ask Sage (as we do below), and it tells you that  .\n  Equivalently, using the fundamental theorem of calculus, we see that   is the unique antiderivative of   whose value at   is zero.\n  \n\n "
},
{
  "id": "d_bounded_region",
  "level": "2",
  "url": "s_double_integrals_gen.html#d_bounded_region",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "bounded "
},
{
  "id": "d_double_integral_general",
  "level": "2",
  "url": "s_double_integrals_gen.html#d_double_integral_general",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Double integral over bounded region.",
  "body": "double integral over bounded region integralable over bounded planar region double integral over region  Double integral over bounded region integrable "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "s_double_integrals_gen.html#figure-1",
  "type": "Figure",
  "number": "1.3.3",
  "title": "Integrating over general planar region",
  "body": "Integrating over general planar region Integrating over general planar region . Made with  GeoGebra . "
},
{
  "id": "d_volume_surface_general",
  "level": "2",
  "url": "s_double_integrals_gen.html#d_volume_surface_general",
  "type": "Definition",
  "number": "1.3.4",
  "title": "Volume below graph and over planar region.",
  "body": "Volume below graph and over planar region volume "
},
{
  "id": "d_elementary_regions",
  "level": "2",
  "url": "s_double_integrals_gen.html#d_elementary_regions",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Elementary planar region.",
  "body": "Elementary planar region elementary planar region type 1 type 2 "
},
{
  "id": "th_Fubini_elementary",
  "level": "2",
  "url": "s_double_integrals_gen.html#th_Fubini_elementary",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "Fubini's theorem over elementary planar regions.",
  "body": "Fubini's theorem over elementary planar regions \n      Assume   is continuous on the bounded planar region  .\n       \n           Type 1 \n           \n            If    ,\n              where   are continuous on  , then\n               .\n           \n         \n           Type 2 \n           \n            If    ,\n              where   are continuous on  , then\n               .\n           \n         \n     "
},
{
  "id": "rm_colon_equal",
  "level": "2",
  "url": "s_double_integrals_gen.html#rm_colon_equal",
  "type": "Remark",
  "number": "1.3.7",
  "title": "",
  "body": "\n      The notation  :=  appearing in   means that the expression on the left is newly notation that we declare to mean the expression on the right. The notation  =:  is used similarly.\n     "
},
{
  "id": "eg_Fubini_elem_planar",
  "level": "2",
  "url": "s_double_integrals_gen.html#eg_Fubini_elem_planar",
  "type": "Example",
  "number": "1.3.8",
  "title": "Fubini's theorem over elementary planar regions.",
  "body": "Fubini's theorem over elementary planar regions \n      In each case below the given region   is elementary of type 1, type 2, or both. Use   to compute  .\n     \n         \n           ,   region in first quadrant bounded by curves   and  .\n         \n         \n            The region   is both of type 1 and type 2. The figure below indicates some of the details in its type-1 description.\n\n             \n            We have\n             .\n           \n       \n         \n           ,   region bounded by  ,  ,  ,  .\n         \n         \n            The given   is type 1, but not type 2.\n             \n            We have\n             .\n           \n       \n         \n           ,   triangle with vertices  .\n         \n         \n            The region   is of type 1 and 2, and thank goodness for that!\n             \n            Indeed, notice that if we tried to integrate with respect to   first, as in the last two examples, we would get nowhere (by hand). This is because although the function   does indeed have an antiderivative, it does not have one that we can write down in terms of our library of familiar functions. (We say   does not have an  elementary  antiderivative.)\n           \n            However, we can certainly integrate with respect to  , and since   is also of type 2,   allows us to do just that:\n             .\n           \n       "
},
{
  "id": "th_double_integral_props",
  "level": "2",
  "url": "s_double_integrals_gen.html#th_double_integral_props",
  "type": "Theorem",
  "number": "1.3.9",
  "title": "Properties of double integrals.",
  "body": "Properties of double integrals \n      Assume   and   are integrable over the bounded regions  .\n     \n         Linearity \n         \n          Given any constants  , we have\n           \n         \n       \n         Domination \n         \n             \n              If   on  , then  \n             \n           \n             \n              If   on  , then  .\n             \n           \n       \n         Additivity \n         \n          If  , where   and   are non-overlapping, then\n           .\n         \n       \n         Absolute value \n         \n          The function   is integrable, and we have\n           .\n         \n       "
},
{
  "id": "eg_double_integral_props",
  "level": "2",
  "url": "s_double_integrals_gen.html#eg_double_integral_props",
  "type": "Example",
  "number": "1.3.10",
  "title": "Using double integral properties.",
  "body": "Using double integral properties \n      Use symmetry properties of   and   to compute  , where   and   is the planar region bounded by the curves   and  .\n     \n      Here is a diagram of  , which we see is of type 2 and  not  of type 1.\n     \n      One option would be to set up a type-2 iterated integral. We need to find the  -coordinates of the points of intersection of the two curves in order to get the bounds for  . We have\n     .\n    Thus the iterated integral is\n     ,\n    which is not very difficult to compute. On the other hand we see that   is  odd with respect to  , in the sense that  . Furthermore the region   is divided into two symmetric regions   and   based on the  -coordinate of a point being positive or negative.\n   \n    Now using additivity ( ) of the integral, we have the following persuasive looking chain of equalities:\n     .\n    My use of  persuasive  should be a red flag. The question is whether this chain of equalities is actually valid; and this boils down to whether  , as claimed. Here is a graphical argument: we have   on  , and thus   computes the volume   of the solid region above   and below the graph of  ; since  , it follows that   on  , and   computes the same volume   (by symmetry of   and  ); we conclude that\n     .\n    We could make this argument even more persuasive by appealing to the limit definition of the double integral: indeed, the oddness of   with respect to  , and symmetry of   and   allow us to choose sequences of Riemann sums for   and   for both integrals for which   for all  .\n   "
},
{
  "id": "th_double_integral_even_odd",
  "level": "2",
  "url": "s_double_integrals_gen.html#th_double_integral_even_odd",
  "type": "Theorem",
  "number": "1.3.11",
  "title": "Double integral of even\/odd functions.",
  "body": "Double integral of even\/odd functions \n      Let   be integrable on the bounded region  .\n     \n         Odd functions \n         \n          If   is odd with respect to   (    for all  ) and   satisfies\n           ,\n          then  .\n         \n         \n          Similarly, if   is odd with respect to   (    for all  ) and   satisfies\n           ,\n          then  .\n         \n       \n         Even functions \n         \n          If   is even with respect to   (    for all  ) and   satisfies\n           ,\n          then  .\n         \n         \n          Similarly, if   is even with respect to   (    for all  ) and   satisfies\n           ,\n          then  .\n         \n       "
},
{
  "id": "sage_iter_elementary_region",
  "level": "2",
  "url": "s_double_integrals_gen.html#sage_iter_elementary_region",
  "type": "Sage example",
  "number": "1.3.1",
  "title": "Iterated integrals over elementary regions.",
  "body": "Iterated integrals over elementary regions \n    Sage can compute the iterated integrals appearing in   for regions of type 1 and 2. The cells below compute the first and third integrals from  : the first as over a region of type 1, the second as over a region of type 2.\n   \n    We mentioned that we can't get far by hand integrating   with respect to  , but Sage can handle it.\n   \n   What is  ? You can ask Sage (as we do below), and it tells you that  .\n  Equivalently, using the fundamental theorem of calculus, we see that   is the unique antiderivative of   whose value at   is zero.\n  \n\n "
},
{
  "id": "s_double_integrals_area",
  "level": "1",
  "url": "s_double_integrals_area.html",
  "type": "Section",
  "number": "1.4",
  "title": "Area of planar regions and average value",
  "body": "Area of planar regions and average value \n    Our definitions of  area  and  average value  arise directly from looking at the Riemann sum definition of the integral.\n   area via double integral measurable planar region Area of planar region measurable area \n      We have seen other notions of area before in our calculus journey.   is more general (it covers a wider family of regions  ) and can be shown to agree to the previous definitions for the cases they cover.\n     Area of planar regions \n      Use   to compute the area of the given region  .\n     \n         \n            is the bounded region between the graphs of   and  .\n         \n       \n         \n            is the disk   of radius   centered at the origin.\n         \n       \n         \n          The region is type 2. (See solution to   for diagram and details.) We have\n            .\n         \n       \n         \n          First we describe   as a type-1 region:\n           .\n          Now compute\n           .\n          We've just derived the familiar area formula for a disk of radius  !\n         \n       Average value average value planar region average value of   over  Average value over planar region average value Average temperature over region \n      The temperature   (in degrees Celsius) at a point   in the bounded region   between the graphs of   and   is given by  . Compute the average temperature over  .\n     \n      Observe that the curves   and   intersect at the points   and  , and that we have   for  . We describe   as a type-1 region:\n       .\n      First compute the area of  :\n       .\n      Now compute\n       .\n     "
},
{
  "id": "d_area_planar",
  "level": "2",
  "url": "s_double_integrals_area.html#d_area_planar",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Area of planar region.",
  "body": "area via double integral measurable planar region Area of planar region measurable area "
},
{
  "id": "rm_area_planar",
  "level": "2",
  "url": "s_double_integrals_area.html#rm_area_planar",
  "type": "Remark",
  "number": "1.4.2",
  "title": "",
  "body": "\n      We have seen other notions of area before in our calculus journey.   is more general (it covers a wider family of regions  ) and can be shown to agree to the previous definitions for the cases they cover.\n     "
},
{
  "id": "eg_double_integral_area",
  "level": "2",
  "url": "s_double_integrals_area.html#eg_double_integral_area",
  "type": "Example",
  "number": "1.4.3",
  "title": "Area of planar regions.",
  "body": "Area of planar regions \n      Use   to compute the area of the given region  .\n     \n         \n            is the bounded region between the graphs of   and  .\n         \n       \n         \n            is the disk   of radius   centered at the origin.\n         \n       \n         \n          The region is type 2. (See solution to   for diagram and details.) We have\n            .\n         \n       \n         \n          First we describe   as a type-1 region:\n           .\n          Now compute\n           .\n          We've just derived the familiar area formula for a disk of radius  !\n         \n       "
},
{
  "id": "d_average_value_planar",
  "level": "2",
  "url": "s_double_integrals_area.html#d_average_value_planar",
  "type": "Definition",
  "number": "1.4.4",
  "title": "Average valueAverage value over planar region",
  "body": "Average value average value planar region average value of   over  Average value over planar region average value "
},
{
  "id": "eg_average_value_planar",
  "level": "2",
  "url": "s_double_integrals_area.html#eg_average_value_planar",
  "type": "Example",
  "number": "1.4.5",
  "title": "Average temperature over region.",
  "body": "Average temperature over region \n      The temperature   (in degrees Celsius) at a point   in the bounded region   between the graphs of   and   is given by  . Compute the average temperature over  .\n     \n      Observe that the curves   and   intersect at the points   and  , and that we have   for  . We describe   as a type-1 region:\n       .\n      First compute the area of  :\n       .\n      Now compute\n       .\n     "
},
{
  "id": "s_triple_integrals",
  "level": "1",
  "url": "s_triple_integrals.html",
  "type": "Section",
  "number": "1.5",
  "title": "Triple integrals",
  "body": "Triple integrals \n    The definition of a double integral of a function of two variables extends easily to that of a triple integral of a function of three variables, and indeed more generally to integrals of functions of   variables for any  . In this course we will stop at  . As you will see the double and triple integral serve as the foundation for all further types of integrals we treat in this course ( , line, surface and volume integrals).\n   \n  The definition of the triple integral is exactly analogous to that of the double integral, only with more subindices! As such we will give a more compressed treatment.\n triple integral over box Triple integral over a box Riemann sum norm integrable Riemann sums as approximations \n  As with double integrals, it is best to consider any given Riemann sum\n   \n  of   over a box   as an  approximation  of the integral  . As the partitions   become finer and finer ( ), these approximations get better and better. In the limit we get the integral precisely.\n triple integral bounded region integralable over bounded solid region double integral over region  Triple integral over bounded region integrable Interpreting integrals \n  The key to understanding the meaning of a double ( ) or triple ( ) integral  in a given context lies in going back to the Riemann sums\n   .\n  If we can understand what the Riemann sums compute, then we understand what the integral computes, as the former are simply approximations of the latter. The following list of common interpretation schema illustrates this principle.\n       \n           Physical: density functions \n           \n            Assume   is a denisty function of some quantity  :     computes the mass per unit area ( ) or unit volume ( ) at a given point in the region; or   computes the charge per unit area ( ) or unit volume ( ) at a given input in the region. In this case the Riemann sums\n\n            can be understood as approximations of the total quanty   over the region; and thus the integral computes the total quantity   for the region.\n           \n         \n           Geometric: integrating 1 \n           \n            Assume we are integrating the constant function   ( ) or   ( ). Here the Riemann sums   can be understood as approximations of the area ( ) or volume ( ) of the region. We conclude\n             \n           \n         \n           Geometric: integrating nonnegative  \n           \n            If   on the region  , we can interpret it as the height of the graph of   over the point  . Riemann sums of   can then be thought of approximations of the volume of the solid region   lying above   and below the graph of  ; the integral   is thus understood as the precise volume of this region.\n           \n         volume via triple integral measurable solid region Volume of solid region measurable volume Elementary solid region elementary solid region \n  Observe that there are in fact 6 distinct types of elementary regions, depending on (a) which coordinate plane we project onto (3 choices), and (b) whether the projection   is of type 1 or type 2. At the risk of going too far in our taxonomy, we could label these different types as A1, A2, B1, B2, C1,  .\n Fubini's theorem elementary solid regions Fubini's theorem over elementary solid regions \n    Assume   is continuous on the elementary region  .\n     \n         Type A \n         \n          If\n           ,\n          where   is an elementary region of  , then\n           .\n         \n       \n         Type B \n         \n          If\n           ,\n          where   is an elementary region of  , then\n           .\n         \n       \n         Type C \n         \n          If\n           ,\n          where   is an elementary region of  , then\n           .\n         \n       \n  Observe that equations   each describe the triple integral as an iterated integral, just as in our earlier Fubini theorems. Only now the inner one is a single integral, and the outer one is a  double integral ! Since the double integral is computed over an elementart region  , we can finish the computation by using  . Furthermore, since   is either of type 1 or type 2, we can expand the equations   into six integral identities involving only single integrals.   does precisely this for your convenience.\n Fubini's theorem expanded \n      Assume   is continuous on the elementary region  .\n     \n         Type A1 \n         \n          If  , then\n           \n         \n       \n         Type A2 \n         \n          If  , then\n           \n         \n       \n     Type B1 \n     \n      If  , then\n       \n     \n   \n     Type B2 \n     \n      If  , then\n       \n     \n   \n     Type C1 \n     \n      If  , then\n       \n     \n   \n     Type C2 \n     \n      If  , then\n       \n     \n   \n  Observe that a box   is itself an elementary region of   of a particularly simple type: all of the defining boundary functions are constant. Furthermore, we see that   is elementary of any the six types. Fubini's theorem over boxes then follows as a direct corollary of  .\n Fubini's theorem for boxes \n      If   is continuous on the box   then\n       .\n     Triple integral over a box \n      Compute the integral of   over the box  .\n     \n      Making full use of Fubini's theorem we use the sequence of integration  We have\n       \n     Volume of tetrahedron \n      Let   be the tetrahedron with vertices  .\n     \n         \n          Set up three separate integrals, of type A, B, and C, that compute the volume of  .\n         \n       \n         \n          Compute the volume of   using one of the integrals above.\n         \n       Type A \n      The projection of   onto the  -plane is just its bottom face:\n       .\n      The top part of the tetrahedron lies in the plane containing  , which has defining equation  , or  . Thus we can describe   as a type-A region as\n       ,\n      and the corresponding volume iterated integral is\n       .\n     Type B \n       The projection of   onto the  -plane is just its left vertical face:\n        .\n       Starting with a point   in this projection and moving in the positive  -direction, we see that we lie within   until hitting its oblique plane at  . Thus we can describe   as a type-B region as\n        ,\n       and the corresponding volume iterated integral is\n        .\n      Type C \n    I claim the projection of   onto the  -plane is\n     .\n    Indeed, the back face of   is the triangular region\n     ,\n    which projects onto  . It is also clear that this is the  widest  section of   in terms of casting a shadow onto the  -plane, and hence that the projection is no bigger than  . Next, given a point  , as we move in the   direction we do not enter the tetrahedron until we hit the oblique plane at  , and we stay within the tetrahedron until we hit its back wall at  . Thus we can describe   as a type-C region as\n     ,\n    and the corresponding volume integral is\n     .\n     \n    All these integrals evaluate to  , the volume of  .\n   Volume of slice of parabolic cylinder \n      Let   be the region bounded by the parabolic cylinder  , the plane  , and the  -plane.\n     \n         \n          Set up two integrals, of type A and B, that compute the volume of  .\n         \n       \n         \n          Compute the volume of   using one of the integrals above.\n         \n       \n      Evaluate the Sage cell below to see a graph of the three surfaces delimiting the region  .\n     Type A \n        The given description of   is basically already a type-A one:\n         .\n        Thus\n         .\n       Type B \n        The type-B description of   is somewhat trickier, as we must first identify the projection of   onto the  -plane. Since all points   satisfy   and  ,\n        we conclude that   for all  , and hence the projection onto the  -plane lies within the set\n         .\n        To see that the projection is in fact  all  of  , notice that for any   the point   lies above the the curve   and below the plane  , and hence is an element of  . Thus any point   is the projection of the point  . Finally, for any point  , as we move in the  -direction we enter   at the cylinder   and exit   at the plane  . This yields the type-B description\n         .\n        Verify for yourself that the volume computation\n         \n        yields  , just as above.\n       Region from iterated integral \n      Sketch the region   whose volume is computed by the iterated integral\n       .\n     \n      The iterated integral corresponds to the type-B description of the region\n       .\n      The projection of   onto the  -plane is the right half of the unit disc\n       .\n      The equation   defines a paraboloid that extends in the negative  -direction from the vertex  . Its intersection with the plane   is the circle\n       .\n      We conclude   consists of all points   satisfying\n       .\n      Evaluate the Sage cell below for a graph.\n     \n  Not surprisingly   and   extend easily to the case of triple integrals. We make these generalizations official below.\n Properties of triple integrals \n      Assume   and   are integrable over the bounded solid regions  .\n     \n         Linearity \n         \n          Given any constants  , we have\n           \n         \n       \n         Domination \n         \n             \n              If   on  , then  \n             \n           \n             \n              If   on  , then  .\n             \n           \n       \n         Additivity \n         \n          If  , where   and   are non-overlapping, then\n           .\n         \n       \n         Absolute value \n         \n          The function   is integrable, and we have\n           .\n         \n       average value solid region average value of   over  Average value over solid region average value Three-dimensional plots \n    Although I want you to practice sketching three-dimensional regions by hand, it is also helpful to use Sage as assistance. The cell below uses Sage's  implicit_plot3d  routine, which creates a graph of a surface defined by an equation. Sage also has a  plot3d  which graphs functions  , which is also useful. (See   for an example using  plot3d .)\n   Iterated integrals over solid regions \n    Sage allows us to easily integrate over elementary regions via iterated integrals. As usual, the hard part is identifying the correct iterated integral to compute; Sage can then do the rest. Consider  , where we needed to compute  . The hard part was coming up with a suitable description of  :  ,\n     .\n    Once this step is completed, the relevant triply iterated integral\n     \n     is easy enough to compute.\n   "
},
{
  "id": "d_triple_integral_box",
  "level": "2",
  "url": "s_triple_integrals.html#d_triple_integral_box",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Triple integral over a box.",
  "body": "triple integral over box Triple integral over a box Riemann sum norm integrable "
},
{
  "id": "interp_Riemann_to_triple",
  "level": "2",
  "url": "s_triple_integrals.html#interp_Riemann_to_triple",
  "type": "Interpretation",
  "number": "1.5.2",
  "title": "Riemann sums as approximations.",
  "body": "Riemann sums as approximations \n  As with double integrals, it is best to consider any given Riemann sum\n   \n  of   over a box   as an  approximation  of the integral  . As the partitions   become finer and finer ( ), these approximations get better and better. In the limit we get the integral precisely.\n "
},
{
  "id": "d_triple_integral_general",
  "level": "2",
  "url": "s_triple_integrals.html#d_triple_integral_general",
  "type": "Definition",
  "number": "1.5.3",
  "title": "Triple integral over bounded region.",
  "body": "triple integral bounded region integralable over bounded solid region double integral over region  Triple integral over bounded region integrable "
},
{
  "id": "interp_integrals",
  "level": "2",
  "url": "s_triple_integrals.html#interp_integrals",
  "type": "Interpretation",
  "number": "1.5.4",
  "title": "Interpreting integrals.",
  "body": "Interpreting integrals \n  The key to understanding the meaning of a double ( ) or triple ( ) integral  in a given context lies in going back to the Riemann sums\n   .\n  If we can understand what the Riemann sums compute, then we understand what the integral computes, as the former are simply approximations of the latter. The following list of common interpretation schema illustrates this principle.\n       \n           Physical: density functions \n           \n            Assume   is a denisty function of some quantity  :     computes the mass per unit area ( ) or unit volume ( ) at a given point in the region; or   computes the charge per unit area ( ) or unit volume ( ) at a given input in the region. In this case the Riemann sums\n\n            can be understood as approximations of the total quanty   over the region; and thus the integral computes the total quantity   for the region.\n           \n         \n           Geometric: integrating 1 \n           \n            Assume we are integrating the constant function   ( ) or   ( ). Here the Riemann sums   can be understood as approximations of the area ( ) or volume ( ) of the region. We conclude\n             \n           \n         \n           Geometric: integrating nonnegative  \n           \n            If   on the region  , we can interpret it as the height of the graph of   over the point  . Riemann sums of   can then be thought of approximations of the volume of the solid region   lying above   and below the graph of  ; the integral   is thus understood as the precise volume of this region.\n           \n         "
},
{
  "id": "d_volume_triple",
  "level": "2",
  "url": "s_triple_integrals.html#d_volume_triple",
  "type": "Definition",
  "number": "1.5.5",
  "title": "Volume of solid region.",
  "body": "volume via triple integral measurable solid region Volume of solid region measurable volume "
},
{
  "id": "d_elementary_sold_regions",
  "level": "2",
  "url": "s_triple_integrals.html#d_elementary_sold_regions",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Elementary solid region.",
  "body": "Elementary solid region elementary solid region "
},
{
  "id": "th_Fubini_elementary_solid",
  "level": "2",
  "url": "s_triple_integrals.html#th_Fubini_elementary_solid",
  "type": "Theorem",
  "number": "1.5.7",
  "title": "Fubini's theorem over elementary solid regions.",
  "body": "Fubini's theorem elementary solid regions Fubini's theorem over elementary solid regions \n    Assume   is continuous on the elementary region  .\n     \n         Type A \n         \n          If\n           ,\n          where   is an elementary region of  , then\n           .\n         \n       \n         Type B \n         \n          If\n           ,\n          where   is an elementary region of  , then\n           .\n         \n       \n         Type C \n         \n          If\n           ,\n          where   is an elementary region of  , then\n           .\n         \n       "
},
{
  "id": "rm_Fubini_iteration",
  "level": "2",
  "url": "s_triple_integrals.html#rm_Fubini_iteration",
  "type": "Remark",
  "number": "1.5.8",
  "title": "",
  "body": "\n  Observe that equations   each describe the triple integral as an iterated integral, just as in our earlier Fubini theorems. Only now the inner one is a single integral, and the outer one is a  double integral ! Since the double integral is computed over an elementart region  , we can finish the computation by using  . Furthermore, since   is either of type 1 or type 2, we can expand the equations   into six integral identities involving only single integrals.   does precisely this for your convenience.\n "
},
{
  "id": "th_Fubini_expanded",
  "level": "2",
  "url": "s_triple_integrals.html#th_Fubini_expanded",
  "type": "Theorem",
  "number": "1.5.9",
  "title": "Fubini's theorem expanded.",
  "body": "Fubini's theorem expanded \n      Assume   is continuous on the elementary region  .\n     \n         Type A1 \n         \n          If  , then\n           \n         \n       \n         Type A2 \n         \n          If  , then\n           \n         \n       \n     Type B1 \n     \n      If  , then\n       \n     \n   \n     Type B2 \n     \n      If  , then\n       \n     \n   \n     Type C1 \n     \n      If  , then\n       \n     \n   \n     Type C2 \n     \n      If  , then\n       \n     \n   "
},
{
  "id": "cor_Fubini_box",
  "level": "2",
  "url": "s_triple_integrals.html#cor_Fubini_box",
  "type": "Corollary",
  "number": "1.5.10",
  "title": "Fubini's theorem for boxes.",
  "body": "Fubini's theorem for boxes \n      If   is continuous on the box   then\n       .\n     "
},
{
  "id": "eg_triple_int_box",
  "level": "2",
  "url": "s_triple_integrals.html#eg_triple_int_box",
  "type": "Example",
  "number": "1.5.11",
  "title": "Triple integral over a box.",
  "body": "Triple integral over a box \n      Compute the integral of   over the box  .\n     \n      Making full use of Fubini's theorem we use the sequence of integration  We have\n       \n     "
},
{
  "id": "eg_volume_tetrahedron",
  "level": "2",
  "url": "s_triple_integrals.html#eg_volume_tetrahedron",
  "type": "Example",
  "number": "1.5.12",
  "title": "Volume of tetrahedron.",
  "body": "Volume of tetrahedron \n      Let   be the tetrahedron with vertices  .\n     \n         \n          Set up three separate integrals, of type A, B, and C, that compute the volume of  .\n         \n       \n         \n          Compute the volume of   using one of the integrals above.\n         \n       Type A \n      The projection of   onto the  -plane is just its bottom face:\n       .\n      The top part of the tetrahedron lies in the plane containing  , which has defining equation  , or  . Thus we can describe   as a type-A region as\n       ,\n      and the corresponding volume iterated integral is\n       .\n     Type B \n       The projection of   onto the  -plane is just its left vertical face:\n        .\n       Starting with a point   in this projection and moving in the positive  -direction, we see that we lie within   until hitting its oblique plane at  . Thus we can describe   as a type-B region as\n        ,\n       and the corresponding volume iterated integral is\n        .\n      Type C \n    I claim the projection of   onto the  -plane is\n     .\n    Indeed, the back face of   is the triangular region\n     ,\n    which projects onto  . It is also clear that this is the  widest  section of   in terms of casting a shadow onto the  -plane, and hence that the projection is no bigger than  . Next, given a point  , as we move in the   direction we do not enter the tetrahedron until we hit the oblique plane at  , and we stay within the tetrahedron until we hit its back wall at  . Thus we can describe   as a type-C region as\n     ,\n    and the corresponding volume integral is\n     .\n     \n    All these integrals evaluate to  , the volume of  .\n   "
},
{
  "id": "eg_volume_slice_para_cyl",
  "level": "2",
  "url": "s_triple_integrals.html#eg_volume_slice_para_cyl",
  "type": "Example",
  "number": "1.5.13",
  "title": "Volume of slice of parabolic cylinder.",
  "body": "Volume of slice of parabolic cylinder \n      Let   be the region bounded by the parabolic cylinder  , the plane  , and the  -plane.\n     \n         \n          Set up two integrals, of type A and B, that compute the volume of  .\n         \n       \n         \n          Compute the volume of   using one of the integrals above.\n         \n       \n      Evaluate the Sage cell below to see a graph of the three surfaces delimiting the region  .\n     Type A \n        The given description of   is basically already a type-A one:\n         .\n        Thus\n         .\n       Type B \n        The type-B description of   is somewhat trickier, as we must first identify the projection of   onto the  -plane. Since all points   satisfy   and  ,\n        we conclude that   for all  , and hence the projection onto the  -plane lies within the set\n         .\n        To see that the projection is in fact  all  of  , notice that for any   the point   lies above the the curve   and below the plane  , and hence is an element of  . Thus any point   is the projection of the point  . Finally, for any point  , as we move in the  -direction we enter   at the cylinder   and exit   at the plane  . This yields the type-B description\n         .\n        Verify for yourself that the volume computation\n         \n        yields  , just as above.\n       "
},
{
  "id": "example-19",
  "level": "2",
  "url": "s_triple_integrals.html#example-19",
  "type": "Example",
  "number": "1.5.14",
  "title": "Region from iterated integral.",
  "body": "Region from iterated integral \n      Sketch the region   whose volume is computed by the iterated integral\n       .\n     \n      The iterated integral corresponds to the type-B description of the region\n       .\n      The projection of   onto the  -plane is the right half of the unit disc\n       .\n      The equation   defines a paraboloid that extends in the negative  -direction from the vertex  . Its intersection with the plane   is the circle\n       .\n      We conclude   consists of all points   satisfying\n       .\n      Evaluate the Sage cell below for a graph.\n     "
},
{
  "id": "th_triple_integral_props",
  "level": "2",
  "url": "s_triple_integrals.html#th_triple_integral_props",
  "type": "Theorem",
  "number": "1.5.15",
  "title": "Properties of triple integrals.",
  "body": "Properties of triple integrals \n      Assume   and   are integrable over the bounded solid regions  .\n     \n         Linearity \n         \n          Given any constants  , we have\n           \n         \n       \n         Domination \n         \n             \n              If   on  , then  \n             \n           \n             \n              If   on  , then  .\n             \n           \n       \n         Additivity \n         \n          If  , where   and   are non-overlapping, then\n           .\n         \n       \n         Absolute value \n         \n          The function   is integrable, and we have\n           .\n         \n       "
},
{
  "id": "d_average_value_solid",
  "level": "2",
  "url": "s_triple_integrals.html#d_average_value_solid",
  "type": "Definition",
  "number": "1.5.16",
  "title": "Average value over solid region.",
  "body": "average value solid region average value of   over  Average value over solid region average value "
},
{
  "id": "sage_plot3d",
  "level": "2",
  "url": "s_triple_integrals.html#sage_plot3d",
  "type": "Sage example",
  "number": "1.5.1",
  "title": "Three-dimensional plots.",
  "body": "Three-dimensional plots \n    Although I want you to practice sketching three-dimensional regions by hand, it is also helpful to use Sage as assistance. The cell below uses Sage's  implicit_plot3d  routine, which creates a graph of a surface defined by an equation. Sage also has a  plot3d  which graphs functions  , which is also useful. (See   for an example using  plot3d .)\n   "
},
{
  "id": "sage_triple_integral_elementary",
  "level": "2",
  "url": "s_triple_integrals.html#sage_triple_integral_elementary",
  "type": "Sage example",
  "number": "1.5.2",
  "title": "Iterated integrals over solid regions.",
  "body": "Iterated integrals over solid regions \n    Sage allows us to easily integrate over elementary regions via iterated integrals. As usual, the hard part is identifying the correct iterated integral to compute; Sage can then do the rest. Consider  , where we needed to compute  . The hard part was coming up with a suitable description of  :  ,\n     .\n    Once this step is completed, the relevant triply iterated integral\n     \n     is easy enough to compute.\n   "
},
{
  "id": "s_substitution_linear",
  "level": "1",
  "url": "s_substitution_linear.html",
  "type": "Section",
  "number": "1.6",
  "title": "Substitution: general",
  "body": "Substitution: general \n    In this section we provide a generalization of sorts of the substitution technique from single-variable calculus. Recall the set up in that context: given a continuous function   and differentiable function   we have\n     .\n      is our generalization of this result to double and triple integrals.\n   transformation continuously differentiable Transformations transformation continuously differentiable determinant for  Jacobian Jacobian of  Determinant and Jacobian determinant Jacobian notation \n      To ease notation we will often give names to the outputs of the component functions  . For example, given a function of the form   we might write\n       \n      for short, in which case the Jacobian of   is denoted\n       .\n     Invertible linear transformations linear invertible linear transformations \n      The textbook's determinant notation looks a lot like absolute value notation:  , it writes   as  . This can lead to confusion in the statement of  , which involves taking the absolute value of the Jacobian of a function. Accordingly, we will stick with our   notation.\n     Substitution \n      Let   be elementary regions of  , where   or  . If\n       \n      is a transformation that is continuously differentiable at all points in the interior of  , then\n       \n      in the   case, and\n       ,\n      in the   case.\n     Substitution as change of variable \n      Substitution is often described as a  change of variable  technique. Let's see why, treating the   case. Suppose we are asked to compute   over the region  . If we want to make use of   to transform this integral to a simpler one, we should treat   as  , the  target  region in our substitution setup.\n     \n      Next, suppose that in terms of the expressions\n       \n    we have  . Substitution allows us to compute the original integral in terms of an integral involving the new function   as follows:\n     \n         \n          Let  . The function   maps our original region   to a new region   that we consider to live in the  -plane.\n         \n       \n         \n          Since   in the   setup, we identify   in this setup.\n         \n       \n         \n          If   is a  transformation , then it is invertible, and there is an inverse function  , where\n           \n        are equations expressing   and   in terms of   and  . By inverse properties,  \n        maps   (in the  -plane) onto   (in the  -plane).\n         \n       \n         \n        Using   we have\n         .\n         \n       \n     \nLet's make the discussion above official with a procedure. As above, it is expressed for   case, but generalizes easily to  .\n Substitution as change of variable \n      Suppose   is defined over the region  , and we have  , where   and   are expressions of the form\n       .\n    To transform the integral   using the change of variables  , proceed as follows.\n     \n         \n          Let  . Determine the region   that   is mapped onto by  :  , compute   .\n         \n       \n         \n          We have\n           .\n         \n       \n         \n          To compute   you can either:\n           \n               \n                determine the inverse function   by solving for   and   in terms of   and   as\n                 \n              and compute   directly, or\n               \n             \n               assuming   and   are both continuously differentiable,\n                compute    indirectly , using the fact that\n                 .\n                Observe that   is an expression in   and   that you will need to express in terms of   and  !\n               \n             \n         \n       \n     Substitution: linear, two variables \n      Define   be the trapezoid with vertices  . Use a substitution to compute\n       \n\n     \n      Use the substitution  \n       \n      with inverse  \n       \n      and Jacobian  . The trapezoidal region in the  -plane has boundary equations  , which are transformed to the boundary equations  . This defines the trapezoidal region\n       \n      in the  -plane, and by substitution we have\n       \n\n     Volume of ellipsoid \n      Let   be the solid ellipsoid defined by the inequality\n       ,\n      where   are fixed constants.\n      Use change of variables to compute\n       .\n     \n      The transformation   transforms the the solid ball   in  -space to the given ellispoid   in  -space. The Jacobian of   is\n       .\n      Now compute\n       ,\n      since the volume of the unit ball   is  .\n     "
},
{
  "id": "d_transformation",
  "level": "2",
  "url": "s_substitution_linear.html#d_transformation",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Transformations.",
  "body": "transformation continuously differentiable Transformations transformation continuously differentiable "
},
{
  "id": "d_Jacobian_det",
  "level": "2",
  "url": "s_substitution_linear.html#d_Jacobian_det",
  "type": "Definition",
  "number": "1.6.2",
  "title": "Determinant and Jacobian.",
  "body": "determinant for  Jacobian Jacobian of  Determinant and Jacobian determinant "
},
{
  "id": "rm_Jacobian_notation",
  "level": "2",
  "url": "s_substitution_linear.html#rm_Jacobian_notation",
  "type": "Remark",
  "number": "1.6.3",
  "title": "Jacobian notation.",
  "body": "Jacobian notation \n      To ease notation we will often give names to the outputs of the component functions  . For example, given a function of the form   we might write\n       \n      for short, in which case the Jacobian of   is denoted\n       .\n     "
},
{
  "id": "d_invertible_linear_transformations",
  "level": "2",
  "url": "s_substitution_linear.html#d_invertible_linear_transformations",
  "type": "Definition",
  "number": "1.6.4",
  "title": "Invertible linear transformations.",
  "body": "Invertible linear transformations linear invertible linear transformations "
},
{
  "id": "rm_det_notation",
  "level": "2",
  "url": "s_substitution_linear.html#rm_det_notation",
  "type": "Remark",
  "number": "1.6.5",
  "title": "",
  "body": "\n      The textbook's determinant notation looks a lot like absolute value notation:  , it writes   as  . This can lead to confusion in the statement of  , which involves taking the absolute value of the Jacobian of a function. Accordingly, we will stick with our   notation.\n     "
},
{
  "id": "th_substitution",
  "level": "2",
  "url": "s_substitution_linear.html#th_substitution",
  "type": "Theorem",
  "number": "1.6.6",
  "title": "Substitution.",
  "body": "Substitution \n      Let   be elementary regions of  , where   or  . If\n       \n      is a transformation that is continuously differentiable at all points in the interior of  , then\n       \n      in the   case, and\n       ,\n      in the   case.\n     "
},
{
  "id": "rm_substitution_as_changeofvar",
  "level": "2",
  "url": "s_substitution_linear.html#rm_substitution_as_changeofvar",
  "type": "Remark",
  "number": "1.6.7",
  "title": "Substitution as change of variable.",
  "body": "Substitution as change of variable \n      Substitution is often described as a  change of variable  technique. Let's see why, treating the   case. Suppose we are asked to compute   over the region  . If we want to make use of   to transform this integral to a simpler one, we should treat   as  , the  target  region in our substitution setup.\n     \n      Next, suppose that in terms of the expressions\n       \n    we have  . Substitution allows us to compute the original integral in terms of an integral involving the new function   as follows:\n     \n         \n          Let  . The function   maps our original region   to a new region   that we consider to live in the  -plane.\n         \n       \n         \n          Since   in the   setup, we identify   in this setup.\n         \n       \n         \n          If   is a  transformation , then it is invertible, and there is an inverse function  , where\n           \n        are equations expressing   and   in terms of   and  . By inverse properties,  \n        maps   (in the  -plane) onto   (in the  -plane).\n         \n       \n         \n        Using   we have\n         .\n         \n       \n     "
},
{
  "id": "proc_subst_change_of_variable",
  "level": "2",
  "url": "s_substitution_linear.html#proc_subst_change_of_variable",
  "type": "Procedure",
  "number": "1.6.8",
  "title": "Substitution as change of variable.",
  "body": "Substitution as change of variable \n      Suppose   is defined over the region  , and we have  , where   and   are expressions of the form\n       .\n    To transform the integral   using the change of variables  , proceed as follows.\n     \n         \n          Let  . Determine the region   that   is mapped onto by  :  , compute   .\n         \n       \n         \n          We have\n           .\n         \n       \n         \n          To compute   you can either:\n           \n               \n                determine the inverse function   by solving for   and   in terms of   and   as\n                 \n              and compute   directly, or\n               \n             \n               assuming   and   are both continuously differentiable,\n                compute    indirectly , using the fact that\n                 .\n                Observe that   is an expression in   and   that you will need to express in terms of   and  !\n               \n             \n         \n       \n     "
},
{
  "id": "example-20",
  "level": "2",
  "url": "s_substitution_linear.html#example-20",
  "type": "Example",
  "number": "1.6.9",
  "title": "Substitution: linear, two variables.",
  "body": "Substitution: linear, two variables \n      Define   be the trapezoid with vertices  . Use a substitution to compute\n       \n\n     \n      Use the substitution  \n       \n      with inverse  \n       \n      and Jacobian  . The trapezoidal region in the  -plane has boundary equations  , which are transformed to the boundary equations  . This defines the trapezoidal region\n       \n      in the  -plane, and by substitution we have\n       \n\n     "
},
{
  "id": "example-21",
  "level": "2",
  "url": "s_substitution_linear.html#example-21",
  "type": "Example",
  "number": "1.6.10",
  "title": "Volume of ellipsoid.",
  "body": "Volume of ellipsoid \n      Let   be the solid ellipsoid defined by the inequality\n       ,\n      where   are fixed constants.\n      Use change of variables to compute\n       .\n     \n      The transformation   transforms the the solid ball   in  -space to the given ellispoid   in  -space. The Jacobian of   is\n       .\n      Now compute\n       ,\n      since the volume of the unit ball   is  .\n     "
},
{
  "id": "s_substitution_polar_cylindrical",
  "level": "1",
  "url": "s_substitution_polar_cylindrical.html",
  "type": "Section",
  "number": "1.7",
  "title": "Substitution: polar and cylindrical coordinates",
  "body": "Substitution: polar and cylindrical coordinates \nTheorems   result from applying   to particular transformations, called the  polar  and  cylindrical  transformations:\n .\n   Polar transformation \n    We will think of the polar coordinate equations\n     \n    as defining a function\n     \n    from one copy of  , called the  -plane, to another, called the  -plane. Earlier in your calculus career you learned to translate back and forth between polar equations and Cartesian (or rectangular) ones. We will now think of these translations as evaluations of the function   or its inverse to regions of the  - or  -plane. For example,   takes the rectangle\n     \n    lying in the  -plane, and maps it to the set of all points in the  -plane lying between the circles of radius   and  , centered at the origin, and between the two rays obtained by rotating the positive  -axis by an angle of   and  , respectively.\n     Action of polar transformation on a rectangle in  -plane. \n    From this observation we can then understand how   transforms an entire rectangular grid in the  -plane to a  polar grid  in the  -plane.\n     Action of polar transformation on a grid in  -plane. \n   \nIt is easy to see that   is continuously differentiable, and hence is a candidate for an application of  . The only thing we need to be careful about is restricting ourselves to regions   where   is one-to-one, and hence defines a transformation.\n substitution polar coordinates Polar change of variables \n      The function\n       \n     \n    is continuously differentiable everywhere. The Jacobian of   is\n     .\n    Assume   is one-to-one on the interior of  , and  let   be the image under  .\n    If   is continuous on the interior of  , then by   we have\n     .\n    Polar transformation \n      It is not difficult to show that\n       .\n    It follows that the polar function   is one-to-one on a given set as long as it doesn't contain pairs of points satisfying one of the conditions in  . Below you find two common types of sets where   is one-to-one:\n     .\n    Observe that   values are allowed to be positive or negative in the set  , and so the range of   needs to be restricted accordingly.\n     Area between limaçon and circle \n      Let   be the region outside the circle of radius 2, centered at the origin, and inside the limaçon with polar equation\n       .\n       Compute the area of  .\n       \n     \n      The  -coordinates of points in   satisfy  . A little algebra shows this implies  . Thus the polar transformation   maps the  -region\n       \n      onto  . Using  , we have\n       .\n\n     Average value over semicircle \n      Compute the average value of   over the semicircular region\n       ,\n      where   is a fixed constant.\n\n     \n      The half-disk   corresponds to the the region\n       \n      in the  -plane via the polar transformation  . We have\n       .\n\n     Cylindrical transformation \n    Our discussion in   generalizes easily to cylindrical coordinates:\n     .\n     Cylindrical coordinates \n    As before, we now think of these equations as defining a function\n     \n    from  -space to  -space. Recalling some of our translation exercises from cylindrical to and from Cartesian coordinates we see that   maps the box\n     \n    lying in  -space, to a certain region of  -space trapped between two vertical circular cylinders of radius   and  .\n     Action of cylindrical transformation on box in  -space. \n   substitution polar coordinates Cylindrical change of variables \n        The function\n         \n       \n      is continuously differentiable everywhere. The Jacobian of   is\n       .\n     Assume   is one-to-one on the interior of  , and let   be the image under  . If   is continuous on the interior of  , then by   we have\n       .\n\n      Integrating using cylindrical change of variables \n        When computing an integral   using a cylindrical change of variables, we often end up describing the corresponding region in  -space in type-A form. In this case, proceed as follows.\n       \n           Sketch \n           \n            Sketch   along with its projection   onto the  -plane.\n           \n         \n           -limits of integration \n           \n            For each point   visualize the line parallel to the  -axis passing through it, and observe where this line enters and exits  . The  -values   give us our  -bounds  .\n           \n         \n           -limits of integration \n           \n            For each  , imagine the ray   in the  -plane that makes an angle of   with the positive  -axis. The  -values   of the points where   enters and leaves   give us our  -bounds  .\n           \n         \n           -limits of integration \n           \n            As we let   vary, the ray   rotates around the  -axis and sweeps across  . The  -values   of the points where the sweeping ray enters and leaves   give us our  -bounds\n             .\n           \n         \n           Integrate \n           \n            Use cylindrical substitution and Fubini's theorem to conclude\n             .\n           \n         Volume of sphere: cylindrical coordinates \n      Consider the solid spherical ball\n       ,\n      where   is a fixed constant. Compute the volume of   using cylindrical coordinates.\n     \n      The projection of   onto the  -plane is the disk  ,, which is described in cylindrical coordinates as  . Next, looking at the vertical line passing through a point  , we see we enter and leave   at the lower and upper surfaces of the sphere. In cylindrical coordinates the defining equation   becomes  , and thus the lower and upper surfaces of the sphere have cylindrical equations   and  , repsectively. We conclude that the cylindrical description of   is\n       .\n      Finally, we compute\n       .\n      We've just derived the volume formula for the sphere of radius  !\n     Average value over hemisphere: cylindrical coordinates \n      Consider the solid hemisphere\n       ,\n      where   is a fixed constant.  Find the average height (distance to  -plane) of points in  .\n     \n      First observe that the function in question is just  . The cylindrical description of   is similar to the previous example, except now  -values are bounded below by zero:\n       .\n      Now compute\n       .\n     "
},
{
  "id": "fig_polar_square",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#fig_polar_square",
  "type": "Figure",
  "number": "1.7.1",
  "title": "",
  "body": "Action of polar transformation on a rectangle in  -plane. "
},
{
  "id": "fig_polar_transform",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#fig_polar_transform",
  "type": "Figure",
  "number": "1.7.2",
  "title": "",
  "body": "Action of polar transformation on a grid in  -plane. "
},
{
  "id": "th_substition_polar",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#th_substition_polar",
  "type": "Theorem",
  "number": "1.7.3",
  "title": "Polar change of variables.",
  "body": "substitution polar coordinates Polar change of variables \n      The function\n       \n     \n    is continuously differentiable everywhere. The Jacobian of   is\n     .\n    Assume   is one-to-one on the interior of  , and  let   be the image under  .\n    If   is continuous on the interior of  , then by   we have\n     .\n    "
},
{
  "id": "rm_polar_transformation",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#rm_polar_transformation",
  "type": "Remark",
  "number": "1.7.4",
  "title": "Polar transformation.",
  "body": "Polar transformation \n      It is not difficult to show that\n       .\n    It follows that the polar function   is one-to-one on a given set as long as it doesn't contain pairs of points satisfying one of the conditions in  . Below you find two common types of sets where   is one-to-one:\n     .\n    Observe that   values are allowed to be positive or negative in the set  , and so the range of   needs to be restricted accordingly.\n     "
},
{
  "id": "example-22",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#example-22",
  "type": "Example",
  "number": "1.7.5",
  "title": "Area between limaçon and circle.",
  "body": "Area between limaçon and circle \n      Let   be the region outside the circle of radius 2, centered at the origin, and inside the limaçon with polar equation\n       .\n       Compute the area of  .\n       \n     \n      The  -coordinates of points in   satisfy  . A little algebra shows this implies  . Thus the polar transformation   maps the  -region\n       \n      onto  . Using  , we have\n       .\n\n     "
},
{
  "id": "example-23",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#example-23",
  "type": "Example",
  "number": "1.7.6",
  "title": "Average value over semicircle.",
  "body": "Average value over semicircle \n      Compute the average value of   over the semicircular region\n       ,\n      where   is a fixed constant.\n\n     \n      The half-disk   corresponds to the the region\n       \n      in the  -plane via the polar transformation  . We have\n       .\n\n     "
},
{
  "id": "fig_cylindrical_coordinates",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#fig_cylindrical_coordinates",
  "type": "Figure",
  "number": "1.7.7",
  "title": "",
  "body": "Cylindrical coordinates "
},
{
  "id": "figure-5",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#figure-5",
  "type": "Figure",
  "number": "1.7.8",
  "title": "",
  "body": "Action of cylindrical transformation on box in  -space. "
},
{
  "id": "th_substition_cylindrical",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#th_substition_cylindrical",
  "type": "Theorem",
  "number": "1.7.9",
  "title": "Cylindrical change of variables.",
  "body": "substitution polar coordinates Cylindrical change of variables \n        The function\n         \n       \n      is continuously differentiable everywhere. The Jacobian of   is\n       .\n     Assume   is one-to-one on the interior of  , and let   be the image under  . If   is continuous on the interior of  , then by   we have\n       .\n\n      "
},
{
  "id": "proc_cylindrical_coord",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#proc_cylindrical_coord",
  "type": "Procedure",
  "number": "1.7.10",
  "title": "Integrating using cylindrical change of variables.",
  "body": "Integrating using cylindrical change of variables \n        When computing an integral   using a cylindrical change of variables, we often end up describing the corresponding region in  -space in type-A form. In this case, proceed as follows.\n       \n           Sketch \n           \n            Sketch   along with its projection   onto the  -plane.\n           \n         \n           -limits of integration \n           \n            For each point   visualize the line parallel to the  -axis passing through it, and observe where this line enters and exits  . The  -values   give us our  -bounds  .\n           \n         \n           -limits of integration \n           \n            For each  , imagine the ray   in the  -plane that makes an angle of   with the positive  -axis. The  -values   of the points where   enters and leaves   give us our  -bounds  .\n           \n         \n           -limits of integration \n           \n            As we let   vary, the ray   rotates around the  -axis and sweeps across  . The  -values   of the points where the sweeping ray enters and leaves   give us our  -bounds\n             .\n           \n         \n           Integrate \n           \n            Use cylindrical substitution and Fubini's theorem to conclude\n             .\n           \n         "
},
{
  "id": "example-24",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#example-24",
  "type": "Example",
  "number": "1.7.11",
  "title": "Volume of sphere: cylindrical coordinates.",
  "body": "Volume of sphere: cylindrical coordinates \n      Consider the solid spherical ball\n       ,\n      where   is a fixed constant. Compute the volume of   using cylindrical coordinates.\n     \n      The projection of   onto the  -plane is the disk  ,, which is described in cylindrical coordinates as  . Next, looking at the vertical line passing through a point  , we see we enter and leave   at the lower and upper surfaces of the sphere. In cylindrical coordinates the defining equation   becomes  , and thus the lower and upper surfaces of the sphere have cylindrical equations   and  , repsectively. We conclude that the cylindrical description of   is\n       .\n      Finally, we compute\n       .\n      We've just derived the volume formula for the sphere of radius  !\n     "
},
{
  "id": "example-25",
  "level": "2",
  "url": "s_substitution_polar_cylindrical.html#example-25",
  "type": "Example",
  "number": "1.7.12",
  "title": "Average value over hemisphere: cylindrical coordinates.",
  "body": "Average value over hemisphere: cylindrical coordinates \n      Consider the solid hemisphere\n       ,\n      where   is a fixed constant.  Find the average height (distance to  -plane) of points in  .\n     \n      First observe that the function in question is just  . The cylindrical description of   is similar to the previous example, except now  -values are bounded below by zero:\n       .\n      Now compute\n       .\n     "
},
{
  "id": "s_substitution_spherical",
  "level": "1",
  "url": "s_substitution_spherical.html",
  "type": "Section",
  "number": "1.8",
  "title": "Substitution: spherical coordinates",
  "body": "Substitution: spherical coordinates \n    As our last application of   we consider the spherical coordinate equations\n     ,\n    along with the auxiliary equations\n     ,\n    derived from the diagram in  .\n     Spherical coordinates \n    As before we think of these equations as defining a function\n     \n    from  -space to  -space.\n substitution spherical Spherical change of variables \n        The function\n         \n       \n      is continuously differentiable everywhere. The Jacobian of   is\n       .\n     Assume   is one-to-one on the interior of  , and let   be the image under  . If   is continuous on the interior of  , then by   we have\n       .\n      Integrating using spherical change of variables \n        When computing an integral   using a spherical change of variables, we often end up describing the corresponding region in  -space in type-B form. In this case, proceed as follows.\n       \n           Sketch \n           \n            Sketch   along with its projection   onto the  -plane.\n           \n         \n           -limits of integration \n           \n            For each   and  , let   be the ray through the origin that makes an angle of   with the positive  -axis, and whose projection on the  -plane makes an angle of   with the positive  -axis. The  -values of the points where the ray   enters and leaves   give us our  -bounds  .\n           \n         \n           -limits of integration \n           \n            For each  , as we let   vary the ray   sweeps through  . The   values   of the points where the sweeping ray enters and leaves   give us our  -bounds  .\n           \n         \n           -limits of integration \n           \n            As we let   vary, the ray   in the  -plane making an angle of   with the positive  -axis rotates around the  -axis and sweeps across  . The  -values   of the points where the sweeping ray enters and leaves   give us our  -bounds\n             .\n           \n         \n           Integrate \n           \n            Use cylindrical substitution and Fubini's theorem to conclude\n             .\n           \n         Converting to spherical coordinates \n\n       Average distance over a solid sphere \n        Compute the average distance to the origin of points   lying within the sphere  , where   is a fixed positive constant.\n       \n        Let   be the region lying within the sphere. Observe that the function in question is   . In spherical coordinates the solid sphere is described as\n         .\n        We have\n         .\n\n       Volume of ice cream cone \n        Let   be the region lying above the cone   and within the sphere  , where   is a fixed positive constant. Compute the volume of   as a triple integral.\n       \n        First we convert the equation   defining the cone into spherical coordinates with the help of the auxiliary equations  :\n         .\n        We see that for a point to lie within the cone   we need  . Next to lie within the sphere, we need  . Since there is no condition on  , the spherical description of   is\n         .\n      Now compute\n       .\n       "
},
{
  "id": "fig_spherical_coordinates",
  "level": "2",
  "url": "s_substitution_spherical.html#fig_spherical_coordinates",
  "type": "Figure",
  "number": "1.8.1",
  "title": "",
  "body": "Spherical coordinates "
},
{
  "id": "th_substition_spherical",
  "level": "2",
  "url": "s_substitution_spherical.html#th_substition_spherical",
  "type": "Theorem",
  "number": "1.8.2",
  "title": "Spherical change of variables.",
  "body": "substitution spherical Spherical change of variables \n        The function\n         \n       \n      is continuously differentiable everywhere. The Jacobian of   is\n       .\n     Assume   is one-to-one on the interior of  , and let   be the image under  . If   is continuous on the interior of  , then by   we have\n       .\n      "
},
{
  "id": "proc_spherical_coord",
  "level": "2",
  "url": "s_substitution_spherical.html#proc_spherical_coord",
  "type": "Procedure",
  "number": "1.8.3",
  "title": "Integrating using spherical change of variables.",
  "body": "Integrating using spherical change of variables \n        When computing an integral   using a spherical change of variables, we often end up describing the corresponding region in  -space in type-B form. In this case, proceed as follows.\n       \n           Sketch \n           \n            Sketch   along with its projection   onto the  -plane.\n           \n         \n           -limits of integration \n           \n            For each   and  , let   be the ray through the origin that makes an angle of   with the positive  -axis, and whose projection on the  -plane makes an angle of   with the positive  -axis. The  -values of the points where the ray   enters and leaves   give us our  -bounds  .\n           \n         \n           -limits of integration \n           \n            For each  , as we let   vary the ray   sweeps through  . The   values   of the points where the sweeping ray enters and leaves   give us our  -bounds  .\n           \n         \n           -limits of integration \n           \n            As we let   vary, the ray   in the  -plane making an angle of   with the positive  -axis rotates around the  -axis and sweeps across  . The  -values   of the points where the sweeping ray enters and leaves   give us our  -bounds\n             .\n           \n         \n           Integrate \n           \n            Use cylindrical substitution and Fubini's theorem to conclude\n             .\n           \n         "
},
{
  "id": "rm_spherical_coords",
  "level": "2",
  "url": "s_substitution_spherical.html#rm_spherical_coords",
  "type": "Remark",
  "number": "1.8.4",
  "title": "Converting to spherical coordinates.",
  "body": "Converting to spherical coordinates \n\n       "
},
{
  "id": "eg_avg_distance_sphere",
  "level": "2",
  "url": "s_substitution_spherical.html#eg_avg_distance_sphere",
  "type": "Example",
  "number": "1.8.5",
  "title": "Average distance over a solid sphere.",
  "body": "Average distance over a solid sphere \n        Compute the average distance to the origin of points   lying within the sphere  , where   is a fixed positive constant.\n       \n        Let   be the region lying within the sphere. Observe that the function in question is   . In spherical coordinates the solid sphere is described as\n         .\n        We have\n         .\n\n       "
},
{
  "id": "eg_volume_icecream",
  "level": "2",
  "url": "s_substitution_spherical.html#eg_volume_icecream",
  "type": "Example",
  "number": "1.8.6",
  "title": "Volume of ice cream cone.",
  "body": "Volume of ice cream cone \n        Let   be the region lying above the cone   and within the sphere  , where   is a fixed positive constant. Compute the volume of   as a triple integral.\n       \n        First we convert the equation   defining the cone into spherical coordinates with the help of the auxiliary equations  :\n         .\n        We see that for a point to lie within the cone   we need  . Next to lie within the sphere, we need  . Since there is no condition on  , the spherical description of   is\n         .\n      Now compute\n       .\n       "
},
{
  "id": "s_multiple_integrals_applications",
  "level": "1",
  "url": "s_multiple_integrals_applications.html",
  "type": "Section",
  "number": "1.9",
  "title": "Applications of multiple integrals",
  "body": "Applications of multiple integrals Center of mass mass of soli Center of mass mass first moments center of mass .\n      When the mass density function   is a constant function ( ,   for fixed  ), we call the center of mass of   its  centroid . Equivalently, the centroid of   is its center of mass, assuming   everywhere.\n     Centroids of triangles \n        Let   be the solid triangular region with vertices  .\n       \n           \n            Compute the center of mass of   when the density function   is constant. (In other words, compute the centroid of  ).\n           \n         \n             \n              Compute the center of mass of   when the denisty function is given by  .\n             \n         \n           \n            Let   be the solid triangular region with vertices  . Give a formula for the centroid of   in terms of  .\n           \n         \n\n       Centroid of hemisphere .\n     \n        Let   be the hemisphere  ,  . Find the center of mass of   assuming the mass density function is given by  .\n       \n\n       Probability and density functions Random variable random variable joint probability density function Joint probability density function  \n        Verify that the function\n        f(x,y)=\\begin{cases}\n          6x^2y\\amp (x,y)\\in [0,1]\\times [0,1]\\\\\n          0\\amp (x,y)\\notin [0,1]\\times [0,1]\n        \\end{cases}\n        is a joint probability distribution function.\n       \n\n       uniformly distributed Expected value expected values Joint probability density function  \n        Let\n         .\n         \n             \n              Verify that   is a probability distribution function.\n             \n           \n             \n              Compute   and   for any two random variables   and   with joint probabilty distribution function  . \n             \n           \n       \n\n       "
},
{
  "id": "d_center_of_mass",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#d_center_of_mass",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Center of mass.",
  "body": "Center of mass mass first moments center of mass .\n      When the mass density function   is a constant function ( ,   for fixed  ), we call the center of mass of   its  centroid . Equivalently, the centroid of   is its center of mass, assuming   everywhere.\n     "
},
{
  "id": "example-28",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#example-28",
  "type": "Example",
  "number": "1.9.2",
  "title": "Centroids of triangles.",
  "body": "Centroids of triangles \n        Let   be the solid triangular region with vertices  .\n       \n           \n            Compute the center of mass of   when the density function   is constant. (In other words, compute the centroid of  ).\n           \n         \n             \n              Compute the center of mass of   when the denisty function is given by  .\n             \n         \n           \n            Let   be the solid triangular region with vertices  . Give a formula for the centroid of   in terms of  .\n           \n         \n\n       "
},
{
  "id": "example-29",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#example-29",
  "type": "Example",
  "number": "1.9.3",
  "title": "Centroid of hemisphere.",
  "body": "Centroid of hemisphere .\n     \n        Let   be the hemisphere  ,  . Find the center of mass of   assuming the mass density function is given by  .\n       \n\n       "
},
{
  "id": "d_random_variable",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#d_random_variable",
  "type": "Definition",
  "number": "1.9.4",
  "title": "Random variable.",
  "body": "Random variable random variable "
},
{
  "id": "d_probability_functions",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#d_probability_functions",
  "type": "Definition",
  "number": "1.9.5",
  "title": "",
  "body": "joint probability density function "
},
{
  "id": "example-30",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#example-30",
  "type": "Example",
  "number": "1.9.6",
  "title": "Joint probability density function.",
  "body": "Joint probability density function  \n        Verify that the function\n        f(x,y)=\\begin{cases}\n          6x^2y\\amp (x,y)\\in [0,1]\\times [0,1]\\\\\n          0\\amp (x,y)\\notin [0,1]\\times [0,1]\n        \\end{cases}\n        is a joint probability distribution function.\n       \n\n       "
},
{
  "id": "d_uniformly_distibuted",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#d_uniformly_distibuted",
  "type": "Definition",
  "number": "1.9.7",
  "title": "",
  "body": "uniformly distributed "
},
{
  "id": "d_expected_value",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#d_expected_value",
  "type": "Definition",
  "number": "1.9.8",
  "title": "Expected value.",
  "body": "Expected value expected values "
},
{
  "id": "example-31",
  "level": "2",
  "url": "s_multiple_integrals_applications.html#example-31",
  "type": "Example",
  "number": "1.9.9",
  "title": "Joint probability density function.",
  "body": "Joint probability density function  \n        Let\n         .\n         \n             \n              Verify that   is a probability distribution function.\n             \n           \n             \n              Compute   and   for any two random variables   and   with joint probabilty distribution function  . \n             \n           \n       \n\n       "
},
{
  "id": "s_line_integal_scalar",
  "level": "1",
  "url": "s_line_integal_scalar.html",
  "type": "Section",
  "number": "2.1",
  "title": "Line integrals of scalar functions",
  "body": "Line integrals of scalar functions path parametrization of a curve Curve parametrizations path parametrization of a curve Curve parametrization curve parametrization path component functions   The set\n           \n          of outputs of  is called the  curve  parametrized by  .\n\n           parametrized planar curve parametrized space curve smooth vector-valued function \n          Geometrically, we can think of a tuple either as a  point    in  , or as an  -vector  . When visualizing a path   and its outputs, we will make use of  both  interpretations. The table below recalls some standard interpretations of   and   along these lines. For simplicity, we assume  .\n           \n\n         Parametrizations you should know \n             \n              Line through   with direction vector  :\n               .\n             \n           \n             \n              Line segment between points  :\n               .\n             \n           \n             \n              Circle of radius   centered at  :\n               .\n             \n           \n             \n              Ellipse  :\n               .\n             \n           \n             \n              Helix of radius   along a given coordinate axis in  -space. Example:\n               .\n             \n           Parametrized curves \n      It is easy to plot parametrized curves in Sage using either  parametric_plot  ( ) or  parametric_plot3d  ( ). The cell below graphs parametrizations of circles confined in various planes in  -space.\n       \n      The next cell illustrates line parametrizations.\n       \n      Try plotting the remaining examples of parametrizations from   in the cell below. If using a plane curve parametrization, delete the  #  in front of  parametric_plot(r(t), (t,a,b)) ; if using a space curve parametrization, delete the  #  in front of  parametric_plot3d(r(t), (t,a,b)) .\n       line integral of scalar function Line integrals of a scalar function Line integral of scalar function \n          Let   be a parametrization of the curve  , and let   be a scalar function defined on  .\n         pointed partition line integral Partition of curve parametrization  \n  As with double and triple integrals, the limit definition of line integrals is useful for interpretation purposes, but not so convenient for computation. The following theorem is the essential tool we will use for computing line integrals.\n Scalar line integrals \n      Let   be a parametrization of the curve  , and let   be a scalar function defined on  . If (a)   is  smooth  on   and (b)   is  continuous  on  , then\n       .\n     Independence of parametrization \n      Do different parametrizations of the same curve   lead to different line integrals of a function  ? Absolutely! Consider\n       .\n      Both parametrize the unit circle  . However, the integral of the constant function   over   yields   (the arc length of  ), while the integral of   yields   (twice the arc length of  ). This makes sense, since   traverses   twice!\n     \n      On the other hand, you can show that if the parametrizations   and   are smooth and one-to-one on  , except possibly at the endpoints, then indeed the two line integrals will be equal. Thus, we say the line integral is  independent  of your choice of smooth, one-to-one parametrization.\n     Interpretations \n      Assume   is a smooth parametrization of   and that   is one-to-one on  , except potentially at the endpoints ( ,   traverses   exactly once ).\n     \n         \n          The line integral   computes the arc length of   between   and  .\n         \n       \n         \n          If   and   is continuous on  , then   computes the area of the  curtain  over   with heights given by  .\n         \n       \n         \n          If   is a continuous mass density on  , where   is treated as an infinitely thin wire, then   computes the mass of  .\n         \n       Area of a curtain over  Piecewise smooth line integral  \n      Assume the parametrized curve   is a union of smoothly parametrized curves  . If   is continuous on  , then\n       .\n     Line integral of helix \n      Let   be the helix with parametrization  ,  , and let  . Compute  .\n     \n      Assemble the ingredients:\n       .\n      Now compute\n       .\n     Area of a curtain \n      Compute the area of the curtain over the curve   between the points   and  , with height function given by  \n     \n The segment of the curve in question has parametrization  ,  . (Observe that  .)\n According to   we have\n  .\n     Mass of wire \n      Let  , and let   be the polygonal wire connecting   to   and   to  . Compute the mass   of the wire assuming its density function is given by  .\n     \n      The path in question is piecewise smooth, allowing us to use  . We use the straight line parametrizations\n       \n      and assemble some ingredients\n       .\n      Lastly we compute\n       .\n     Scalar line integral \n   The basic ingredients of a line integral are an expression   defining a parametrized curve, the domain   of  , and the function   we are integrating. You can see how the Sage cell below assembles these basic ingredients, along with the further ingredients   and   , before computing the line integral using  . Note how we use the  vector()  command to create vector objects. This is essential for doing any further vector operations:  , dot product, norm,  .\n   "
},
{
  "id": "d_curve_parametrization",
  "level": "2",
  "url": "s_line_integal_scalar.html#d_curve_parametrization",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Curve parametrization.",
  "body": "path parametrization of a curve Curve parametrization curve parametrization path component functions   The set\n           \n          of outputs of  is called the  curve  parametrized by  .\n\n           parametrized planar curve parametrized space curve smooth "
},
{
  "id": "rm_paths_vector_valued_function",
  "level": "2",
  "url": "s_line_integal_scalar.html#rm_paths_vector_valued_function",
  "type": "Remark",
  "number": "2.1.2",
  "title": "",
  "body": "vector-valued function \n          Geometrically, we can think of a tuple either as a  point    in  , or as an  -vector  . When visualizing a path   and its outputs, we will make use of  both  interpretations. The table below recalls some standard interpretations of   and   along these lines. For simplicity, we assume  .\n           \n\n         "
},
{
  "id": "rm_paths",
  "level": "2",
  "url": "s_line_integal_scalar.html#rm_paths",
  "type": "Remark",
  "number": "2.1.3",
  "title": "Parametrizations you should know.",
  "body": "Parametrizations you should know \n             \n              Line through   with direction vector  :\n               .\n             \n           \n             \n              Line segment between points  :\n               .\n             \n           \n             \n              Circle of radius   centered at  :\n               .\n             \n           \n             \n              Ellipse  :\n               .\n             \n           \n             \n              Helix of radius   along a given coordinate axis in  -space. Example:\n               .\n             \n           "
},
{
  "id": "sage_parametrized_curves",
  "level": "2",
  "url": "s_line_integal_scalar.html#sage_parametrized_curves",
  "type": "Sage example",
  "number": "2.1.1",
  "title": "Parametrized curves.",
  "body": "Parametrized curves \n      It is easy to plot parametrized curves in Sage using either  parametric_plot  ( ) or  parametric_plot3d  ( ). The cell below graphs parametrizations of circles confined in various planes in  -space.\n       \n      The next cell illustrates line parametrizations.\n       \n      Try plotting the remaining examples of parametrizations from   in the cell below. If using a plane curve parametrization, delete the  #  in front of  parametric_plot(r(t), (t,a,b)) ; if using a space curve parametrization, delete the  #  in front of  parametric_plot3d(r(t), (t,a,b)) .\n       "
},
{
  "id": "d_line_integral_scalar",
  "level": "2",
  "url": "s_line_integal_scalar.html#d_line_integral_scalar",
  "type": "Definition",
  "number": "2.1.4",
  "title": "Line integral of scalar function.",
  "body": "Line integral of scalar function \n          Let   be a parametrization of the curve  , and let   be a scalar function defined on  .\n         pointed partition line integral "
},
{
  "id": "figure-7",
  "level": "2",
  "url": "s_line_integal_scalar.html#figure-7",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": "Partition of curve parametrization  "
},
{
  "id": "th_line_integral_scalar",
  "level": "2",
  "url": "s_line_integal_scalar.html#th_line_integral_scalar",
  "type": "Theorem",
  "number": "2.1.6",
  "title": "Scalar line integrals.",
  "body": "Scalar line integrals \n      Let   be a parametrization of the curve  , and let   be a scalar function defined on  . If (a)   is  smooth  on   and (b)   is  continuous  on  , then\n       .\n     "
},
{
  "id": "rm_line_integral_independence",
  "level": "2",
  "url": "s_line_integal_scalar.html#rm_line_integral_independence",
  "type": "Remark",
  "number": "2.1.7",
  "title": "Independence of parametrization.",
  "body": "Independence of parametrization \n      Do different parametrizations of the same curve   lead to different line integrals of a function  ? Absolutely! Consider\n       .\n      Both parametrize the unit circle  . However, the integral of the constant function   over   yields   (the arc length of  ), while the integral of   yields   (twice the arc length of  ). This makes sense, since   traverses   twice!\n     \n      On the other hand, you can show that if the parametrizations   and   are smooth and one-to-one on  , except possibly at the endpoints, then indeed the two line integrals will be equal. Thus, we say the line integral is  independent  of your choice of smooth, one-to-one parametrization.\n     "
},
{
  "id": "th_line_integral_interpretations",
  "level": "2",
  "url": "s_line_integal_scalar.html#th_line_integral_interpretations",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "Interpretations.",
  "body": "Interpretations \n      Assume   is a smooth parametrization of   and that   is one-to-one on  , except potentially at the endpoints ( ,   traverses   exactly once ).\n     \n         \n          The line integral   computes the arc length of   between   and  .\n         \n       \n         \n          If   and   is continuous on  , then   computes the area of the  curtain  over   with heights given by  .\n         \n       \n         \n          If   is a continuous mass density on  , where   is treated as an infinitely thin wire, then   computes the mass of  .\n         \n       "
},
{
  "id": "figure-8",
  "level": "2",
  "url": "s_line_integal_scalar.html#figure-8",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": "Area of a curtain over  "
},
{
  "id": "th_line_integral_scalar_piecwise",
  "level": "2",
  "url": "s_line_integal_scalar.html#th_line_integral_scalar_piecwise",
  "type": "Theorem",
  "number": "2.1.10",
  "title": "Piecewise smooth line integral.",
  "body": "Piecewise smooth line integral  \n      Assume the parametrized curve   is a union of smoothly parametrized curves  . If   is continuous on  , then\n       .\n     "
},
{
  "id": "example-32",
  "level": "2",
  "url": "s_line_integal_scalar.html#example-32",
  "type": "Example",
  "number": "2.1.11",
  "title": "Line integral of helix.",
  "body": "Line integral of helix \n      Let   be the helix with parametrization  ,  , and let  . Compute  .\n     \n      Assemble the ingredients:\n       .\n      Now compute\n       .\n     "
},
{
  "id": "example-33",
  "level": "2",
  "url": "s_line_integal_scalar.html#example-33",
  "type": "Example",
  "number": "2.1.12",
  "title": "Area of a curtain.",
  "body": "Area of a curtain \n      Compute the area of the curtain over the curve   between the points   and  , with height function given by  \n     \n The segment of the curve in question has parametrization  ,  . (Observe that  .)\n According to   we have\n  .\n     "
},
{
  "id": "example-34",
  "level": "2",
  "url": "s_line_integal_scalar.html#example-34",
  "type": "Example",
  "number": "2.1.13",
  "title": "Mass of wire.",
  "body": "Mass of wire \n      Let  , and let   be the polygonal wire connecting   to   and   to  . Compute the mass   of the wire assuming its density function is given by  .\n     \n      The path in question is piecewise smooth, allowing us to use  . We use the straight line parametrizations\n       \n      and assemble some ingredients\n       .\n      Lastly we compute\n       .\n     "
},
{
  "id": "sage_line_integrals_scalar",
  "level": "2",
  "url": "s_line_integal_scalar.html#sage_line_integrals_scalar",
  "type": "Sage example",
  "number": "2.1.2",
  "title": "Scalar line integral.",
  "body": "Scalar line integral \n   The basic ingredients of a line integral are an expression   defining a parametrized curve, the domain   of  , and the function   we are integrating. You can see how the Sage cell below assembles these basic ingredients, along with the further ingredients   and   , before computing the line integral using  . Note how we use the  vector()  command to create vector objects. This is essential for doing any further vector operations:  , dot product, norm,  .\n   "
},
{
  "id": "s_line_integal_scalar_vector_fields",
  "level": "1",
  "url": "s_line_integal_scalar_vector_fields.html",
  "type": "Section",
  "number": "2.2",
  "title": "Line integrals of vector fields",
  "body": "Line integrals of vector fields Vector fields vector field Vector fields vector field component functions continuous differentiable continuously differentiable Visualizing vector fields \n          Like a curve parametrization, a vector field   is yet another example of a  vector-valued function . In contrast to parametrizations, however, note that both the input and output of   are  -tuples. This makes visualizing   slightly more complicated. We use the following method to do so. As always,   is equal to 2 or 3 for us.\n         \n             \n              Interpret the input tuple   as a  point  in  -space.\n             \n           \n             \n              Treat the output tuple   as an  -vector .\n             \n           \n             \n              For a given input  , draw the output   as a vector with  initial point  equal to  :  , the  tail  of the vector   is chosen to be the point  .\n             \n           \n             \n              Sketch the entire vector field by performing Step 3 for  many  input points!\n             \n           Line integrals of vector fields  line integral of a vector field Integral of a vector field along a curve line integral Vector field line integral notation \n          The first equality among   should be considered purely notational:  , it states simply that the integral being defined can be denoted by either of the expressions   or  . The remaining equalities   then give actual meaning to these two expressions.\n         Vector line integral in plane \n          Let  . Let   be the curve  .\n           \n               \n                Compute the integral of   along the segment of   starting at   and ending at  .\n               \n             \n               \n                Compute the integral of   along the segment of   starting at   and ending at  .\n               \n             \n         \n\n         Independence of parametrization reverse Vector field integral over helix \n          Let   be the helix with parametrization  ,  . Compute  , where  .\n         \n\n         Line integrals with respect to  \n          Let  ,  , be a smooth parametrization of the curve  . Given a vector field   that is continuous on the curve  , we define the line integrals with respect to   as follows.\n           .\n        From   we see that we have\n         .\n         \n      To make sense of what a vector field line integral computes in a given context, it is best to consider its formulation as the  scalar line integral  of the scalar function  . Given a partition of a parametrized curve into curve segments with endpoints\n       \n      we have\n       \n      where   is a sample point in the  -th segment of the partition of  , and   is the arc length of that segment. Focusing in on one term   and recalling our dot product cosine formula\n       ,\n      where   is the angle between   and   at  , we see that this term multiplies the  component  of   in the direction of   by the arc length   of the  -th segment. We have thus reduced our interpretation problem to understanding what type of quantity is obtained by summing these products. The definition of  work  and  circulation  below are two examples of doing just this.\n       Interpreting  \n     Work and flow \n          Let   be a a smooth parametrization of the curve  , and assume the vector field   is continuous on  .\n         \n             work \n           \n             flow simple closed circulation \n           \n          Let   be the unit circle  . Compute the the circulation around   for the given fluid velocity field.\n           \n               \n                 \n               \n             \n               \n               \n               \n             \n         \n\n         Vector line integral \n        It is not difficult to modify our Sage cell from   to compute vector line integrals. As in that example, we use the  vector()  function to make vector objects out of our lists: this is essential for using vector operations like dot product, norm,  . Here is the line integral from  .\n       Flux across a planar curve flux across planar curve Flux flux \n        If   is a parametrization of   with  counterclockwise  (positive) orientation, then the outward unit normal vector can be expressed as\n         .\n        Furthermore, if  , then\n         .\n       "
},
{
  "id": "d_vector_field",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#d_vector_field",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Vector fields.",
  "body": "vector field Vector fields vector field component functions continuous differentiable continuously differentiable "
},
{
  "id": "proc_visualize_vector_fields",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#proc_visualize_vector_fields",
  "type": "Procedure",
  "number": "2.2.2",
  "title": "Visualizing vector fields.",
  "body": "Visualizing vector fields \n          Like a curve parametrization, a vector field   is yet another example of a  vector-valued function . In contrast to parametrizations, however, note that both the input and output of   are  -tuples. This makes visualizing   slightly more complicated. We use the following method to do so. As always,   is equal to 2 or 3 for us.\n         \n             \n              Interpret the input tuple   as a  point  in  -space.\n             \n           \n             \n              Treat the output tuple   as an  -vector .\n             \n           \n             \n              For a given input  , draw the output   as a vector with  initial point  equal to  :  , the  tail  of the vector   is chosen to be the point  .\n             \n           \n             \n              Sketch the entire vector field by performing Step 3 for  many  input points!\n             \n           "
},
{
  "id": "d_line_integral_vector",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#d_line_integral_vector",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Integral of a vector field along a curve.",
  "body": "line integral of a vector field Integral of a vector field along a curve line integral "
},
{
  "id": "rm_line_integral_vector_notation_1",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#rm_line_integral_vector_notation_1",
  "type": "Remark",
  "number": "2.2.4",
  "title": "Vector field line integral notation.",
  "body": "Vector field line integral notation \n          The first equality among   should be considered purely notational:  , it states simply that the integral being defined can be denoted by either of the expressions   or  . The remaining equalities   then give actual meaning to these two expressions.\n         "
},
{
  "id": "eg_vector_line_integral_2d",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#eg_vector_line_integral_2d",
  "type": "Example",
  "number": "2.2.5",
  "title": "Vector line integral in plane.",
  "body": "Vector line integral in plane \n          Let  . Let   be the curve  .\n           \n               \n                Compute the integral of   along the segment of   starting at   and ending at  .\n               \n             \n               \n                Compute the integral of   along the segment of   starting at   and ending at  .\n               \n             \n         \n\n         "
},
{
  "id": "rm_vector_line_integral_independence",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#rm_vector_line_integral_independence",
  "type": "Remark",
  "number": "2.2.6",
  "title": "Independence of parametrization.",
  "body": "Independence of parametrization reverse "
},
{
  "id": "eg_vector_line_integral_helix",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#eg_vector_line_integral_helix",
  "type": "Example",
  "number": "2.2.7",
  "title": "Vector field integral over helix.",
  "body": "Vector field integral over helix \n          Let   be the helix with parametrization  ,  . Compute  , where  .\n         \n\n         "
},
{
  "id": "d_line_integrals_dxdydz",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#d_line_integrals_dxdydz",
  "type": "Definition",
  "number": "2.2.8",
  "title": "Line integrals with respect to <span class=\"process-math\">\\(dx, dy, dz\\)<\/span>.",
  "body": "Line integrals with respect to  \n          Let  ,  , be a smooth parametrization of the curve  . Given a vector field   that is continuous on the curve  , we define the line integrals with respect to   as follows.\n           .\n        From   we see that we have\n         .\n         "
},
{
  "id": "figure-9",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#figure-9",
  "type": "Figure",
  "number": "2.2.9",
  "title": "",
  "body": "Interpreting  "
},
{
  "id": "d_work_flow_circulation",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#d_work_flow_circulation",
  "type": "Definition",
  "number": "2.2.10",
  "title": "Work and flow.",
  "body": "Work and flow \n          Let   be a a smooth parametrization of the curve  , and assume the vector field   is continuous on  .\n         \n             work \n           \n             flow simple closed circulation \n           "
},
{
  "id": "example-37",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#example-37",
  "type": "Example",
  "number": "2.2.11",
  "title": "",
  "body": "\n          Let   be the unit circle  . Compute the the circulation around   for the given fluid velocity field.\n           \n               \n                 \n               \n             \n               \n               \n               \n             \n         \n\n         "
},
{
  "id": "sage_vector_line_integral",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#sage_vector_line_integral",
  "type": "Sage example",
  "number": "2.2.1",
  "title": "Vector line integral.",
  "body": "Vector line integral \n        It is not difficult to modify our Sage cell from   to compute vector line integrals. As in that example, we use the  vector()  function to make vector objects out of our lists: this is essential for using vector operations like dot product, norm,  . Here is the line integral from  .\n       "
},
{
  "id": "d_flux",
  "level": "2",
  "url": "s_line_integal_scalar_vector_fields.html#d_flux",
  "type": "Definition",
  "number": "2.2.12",
  "title": "Flux.",
  "body": "flux across planar curve Flux flux \n        If   is a parametrization of   with  counterclockwise  (positive) orientation, then the outward unit normal vector can be expressed as\n         .\n        Furthermore, if  , then\n         .\n       "
},
{
  "id": "s_pathind_conservative_potential",
  "level": "1",
  "url": "s_pathind_conservative_potential.html",
  "type": "Section",
  "number": "2.3",
  "title": "Path independence, conservative fields, potential functions",
  "body": "Path independence, conservative fields, potential functions gradient vector field potential function Gradient vector fields and the fundamental theorem of line integrals Gradient vector fields and potential functions gradient vector field potential function Gradient vector fields \n        The vector field\n         \n         is a gradient vector field. Indeed, we have  , where  . Thus   is a potential function for  . The function   is another potential function of  .\n       \n        The vector field\n         \n        is a gradient vector field, with potential function\n         .\n       \n    Gradient vector fields   are nice to compute with, as the following theorem indicates.\n   Fundamental theorem of line integrals \n       Let   be a smooth parametrization of the curve   with initial point   and end point  , and assume the vector field    is continuous on a set containing  . If   for some function  , then\n        .\n       \n        We have\n         .\n       Integral of gradient field over closed curve \n        If   is a smooth closed curve, and if   is a gradient vector field that is continuous on a set containing  , then\n         .\n       \n      Let   be the initial and end point of the closed curve  . According to   we have\n       .\n     \n      provides a potential way of showing a vector field   is  not  a gradient field: namely, show that   for a suitably chosen closed curve  .\n   A non-gradient vector field \n        Use   to show that   is not a gradient vector field.\n       \n        Let   be the unit circle  , with parametrization  . We have\n         .\n        Since  ,   implies that we cannot have  .\n       Work done by gravity \n        Given a point particle of mass M at the origin in  , the gravitational force   acting on a point particle of mass   at position   is\n         ,\n        where   is the gravitational constant and   is the position vector of the object.\n        Compute the work done by gravity if the point particle of mass   travels from position   to position   along a smooth curve  .\n       \n        As suggested by the setup, we suspect   is a gradient vector field. Indeed, we have  , where\n         ,\n        as you can easily check. According to  , we have\n         .\n        Observe that this expression for the work   is equal to the change in the object's kinetic energy the object undergoes as it moves from position   to  .\n       Conservative vector fields \n      can be summarized by saying that if   is a gradient vector field, then the line integrals along any two paths connecting points   and   are always equal:   that the line integral from   to   of   is  independent of the path .\n   Conservative vector field conservative path independent Loop property of conservative fields \n        If   is a continuous vector field on the open set  , then   is conservative if and only if   for all piecewise smooth closed curves  . Using logical shorthand:\n         .\n       Proof: conservative  \n        Assume   is conservative. Given a closed curve  , pick two points   and consider   as a parametrize curve   from   to   followed by a parametrized curve   from   to  . We have\n         .\n        How is the conservative property used in the penultimate equality? The parametrizations   and   both start at   and end at  ; since   is conservative, the corresponding line integrals are equal.\n       Proof:   conservative  \n        The proof is very similar to the first implication. Given any two curves   connecting points  , the curve   obtained by first travelling along   and then along the reverse  of   is closed. We have\n         ,\n        and hence\n         .\n       Gradient implies conservative \n        If   is a continuous gradient vector field on the open set  , then   is conservative on  . Using logical shorthand:\n         \n       \n        Take any piecewise smooth curve   from point   to  , and let   be a partition of   into   smooth curve segments   from   to  . We have\n         .\n        This shows that the line integral of   between any two points in   is path independent, and hence that   is conservative on  .\n       Open connected sets connected Gradient iff conservative (connected domain) \n      If   is a continuous vector field on the open connected set  , then   is conservative if and only if   for some function   defined on  . Using logical shorthand:\n       .\n     Proof of implication   conservative \n      This implication follows directly from  .\n     Proof of implication   conservative  \n      Our proof will assume   for simplicity of notation; it works just as well for  . Assume   is conservative. We define the scalar function   as follows: fix any   in  ; for any   define\n       ,\n      where the notation   is understood to mean the line integral of   over any choice of piecewise smooth curve  . That   is a well-defined function follows from the fact that (a) there is  some  choice of curve   from   to   (  is connected), and (b) the value of the line integral  does not depend  on this choice (  is conservative). Next, we claim that   is a potential function for  :  ,  . Indeed, we have\n       .\n      This proves  ; the argument that   is exactly similar. We conclude  .\n     Curl test for conservative fields curl curl of vector field  curl of vector field  Curl of a vector field curl \n  We will study curl in more detail later, but for now we observe that it provides a partial check for whether a vector field is a gradient field.\n Gradient implies zero curl \n      Let   be a vector field whose component functions have continuous partial derivatives on the set  . If   for some scalar function  , then   for all   . Using logical shorthand:\n       .\n     \n    If   for some some  , then\n     .\n    This shows the first component of   is the zero function. Similar reasoning shows the same is true for the second and third components.\n   Gradient implies zero curl ( ) \n      Let   be a vector field whose component functions have continuous partial derivatives on the set  . If   for some scalar function, then   for all  .\n     \n      By way of shorthand, we will understand the statement   to mean   when   is a 2-dimensional vector field.\n     \n      Identify   with the 3-dimensional vector field  . The result follows easily from  .\n     Curl test: conclusive \n      Show that   is not a gradient vector field.\n     \n      The curl of   is the vector field\n       .\n      Thus   is not a gradient vector field by  .\n     Curl test: inconclusive \n     Let  . Show that (a)  , but (b)   is not a gradient vector field.\n     \n      The curl computation in (a) is straightforward. To see that   is not a gradient vector field, we find a closed curve   for which  . Take   to be the unit circle with parametrization  ,  . We have\n       .\n     \n    shows that the implication   is not an equivalence. In other words, it is possible to have   and yet   is  not  a gradient vector field. However, we do get an equivalence if the domain under consideration is assumed to be nice enough: namely, connected and  simply connected .\n simply connected Simply connected sets simply connected Gradient iff zero curl (connected and simply connected domain) \n      Let   be open, connected and simply connected. If the component functions of   have continuous partial derivatives on   then   if and only if  . Using logical shortand:\n       .\n      Note: if  , we understand   to mean  .\n     \n  As you see, depending on how nice the domain   of a vector field is, we get weaker or stronger statements about the relationship between conservative vector fields, gradient vector fields, and curl-zero vector fields. We summarize this with some logical housekeeping.\n Logical housekeeping \n     Let   be a vector field on the set  . We use the abbreviations  o ,  c ,  sc  for open, connected, and simply connected. For statements involving curl, assume the partial derivatives of the component functions of   are continuous.\n     \n    Additionally, for any domain   we always have the following loop property equivalence:\n     .\n Curl test: complete \n      Let  . Decide whether    is a gradient vector field. If yes, find a potential function for  .\n     \n      It is straightforward, if somewhat tiresome, to show  . Since the domain of   is  , which is connected and simply connected, we conclude from   that   is a gradient vector field. Let   be a potential function for  .\n       .\n      Looking at the partial formula for   in our last line, we observe that setting   results in the function  , which satisfies  .\n     Computing curl \n    Sage allows us to easily compute the curl of vector fields. Below we compute the curl of the vector field from  . The command  vector  in the cell below turns our symbolic list into a vector object.\n   \n    The same command works for vector fields of dimension 2: for  , the  curl  method returns  .\n   "
},
{
  "id": "d_gradient_field_potential",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#d_gradient_field_potential",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Gradient vector fields and potential functions.",
  "body": "Gradient vector fields and potential functions gradient vector field potential function "
},
{
  "id": "eg_gradient_vector_fields",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#eg_gradient_vector_fields",
  "type": "Example",
  "number": "2.3.2",
  "title": "Gradient vector fields.",
  "body": "Gradient vector fields \n        The vector field\n         \n         is a gradient vector field. Indeed, we have  , where  . Thus   is a potential function for  . The function   is another potential function of  .\n       \n        The vector field\n         \n        is a gradient vector field, with potential function\n         .\n       "
},
{
  "id": "th_fund_thm_line_integrals",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#th_fund_thm_line_integrals",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Fundamental theorem of line integrals.",
  "body": "Fundamental theorem of line integrals \n       Let   be a smooth parametrization of the curve   with initial point   and end point  , and assume the vector field    is continuous on a set containing  . If   for some function  , then\n        .\n       \n        We have\n         .\n       "
},
{
  "id": "cor_fund_thm_line_integrals",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#cor_fund_thm_line_integrals",
  "type": "Corollary",
  "number": "2.3.4",
  "title": "Integral of gradient field over closed curve.",
  "body": "Integral of gradient field over closed curve \n        If   is a smooth closed curve, and if   is a gradient vector field that is continuous on a set containing  , then\n         .\n       "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#proof-2",
  "type": "Proof",
  "number": "2.3.1.1",
  "title": "",
  "body": "\n      Let   be the initial and end point of the closed curve  . According to   we have\n       .\n     "
},
{
  "id": "example-39",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#example-39",
  "type": "Example",
  "number": "2.3.5",
  "title": "A non-gradient vector field.",
  "body": "A non-gradient vector field \n        Use   to show that   is not a gradient vector field.\n       \n        Let   be the unit circle  , with parametrization  . We have\n         .\n        Since  ,   implies that we cannot have  .\n       "
},
{
  "id": "example-40",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#example-40",
  "type": "Example",
  "number": "2.3.6",
  "title": "Work done by gravity.",
  "body": "Work done by gravity \n        Given a point particle of mass M at the origin in  , the gravitational force   acting on a point particle of mass   at position   is\n         ,\n        where   is the gravitational constant and   is the position vector of the object.\n        Compute the work done by gravity if the point particle of mass   travels from position   to position   along a smooth curve  .\n       \n        As suggested by the setup, we suspect   is a gradient vector field. Indeed, we have  , where\n         ,\n        as you can easily check. According to  , we have\n         .\n        Observe that this expression for the work   is equal to the change in the object's kinetic energy the object undergoes as it moves from position   to  .\n       "
},
{
  "id": "d_conservative_field",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#d_conservative_field",
  "type": "Definition",
  "number": "2.3.7",
  "title": "Conservative vector field.",
  "body": "Conservative vector field conservative path independent "
},
{
  "id": "th_conservative_loops",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#th_conservative_loops",
  "type": "Theorem",
  "number": "2.3.8",
  "title": "Loop property of conservative fields.",
  "body": "Loop property of conservative fields \n        If   is a continuous vector field on the open set  , then   is conservative if and only if   for all piecewise smooth closed curves  . Using logical shorthand:\n         .\n       Proof: conservative  \n        Assume   is conservative. Given a closed curve  , pick two points   and consider   as a parametrize curve   from   to   followed by a parametrized curve   from   to  . We have\n         .\n        How is the conservative property used in the penultimate equality? The parametrizations   and   both start at   and end at  ; since   is conservative, the corresponding line integrals are equal.\n       Proof:   conservative  \n        The proof is very similar to the first implication. Given any two curves   connecting points  , the curve   obtained by first travelling along   and then along the reverse  of   is closed. We have\n         ,\n        and hence\n         .\n       "
},
{
  "id": "th_gradient_implies_conservative",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#th_gradient_implies_conservative",
  "type": "Theorem",
  "number": "2.3.9",
  "title": "Gradient implies conservative.",
  "body": "Gradient implies conservative \n        If   is a continuous gradient vector field on the open set  , then   is conservative on  . Using logical shorthand:\n         \n       \n        Take any piecewise smooth curve   from point   to  , and let   be a partition of   into   smooth curve segments   from   to  . We have\n         .\n        This shows that the line integral of   between any two points in   is path independent, and hence that   is conservative on  .\n       "
},
{
  "id": "d_open_connected",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#d_open_connected",
  "type": "Definition",
  "number": "2.3.10",
  "title": "Open connected sets.",
  "body": "Open connected sets connected "
},
{
  "id": "th_conservative_iff_gradient",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#th_conservative_iff_gradient",
  "type": "Theorem",
  "number": "2.3.11",
  "title": "Gradient iff conservative (connected domain).",
  "body": "Gradient iff conservative (connected domain) \n      If   is a continuous vector field on the open connected set  , then   is conservative if and only if   for some function   defined on  . Using logical shorthand:\n       .\n     Proof of implication   conservative \n      This implication follows directly from  .\n     Proof of implication   conservative  \n      Our proof will assume   for simplicity of notation; it works just as well for  . Assume   is conservative. We define the scalar function   as follows: fix any   in  ; for any   define\n       ,\n      where the notation   is understood to mean the line integral of   over any choice of piecewise smooth curve  . That   is a well-defined function follows from the fact that (a) there is  some  choice of curve   from   to   (  is connected), and (b) the value of the line integral  does not depend  on this choice (  is conservative). Next, we claim that   is a potential function for  :  ,  . Indeed, we have\n       .\n      This proves  ; the argument that   is exactly similar. We conclude  .\n     "
},
{
  "id": "d_curl",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#d_curl",
  "type": "Definition",
  "number": "2.3.12",
  "title": "Curl of a vector field.",
  "body": "curl curl of vector field  curl of vector field  Curl of a vector field curl "
},
{
  "id": "th_gradient_implies_curlzero",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#th_gradient_implies_curlzero",
  "type": "Theorem",
  "number": "2.3.13",
  "title": "Gradient implies zero curl.",
  "body": "Gradient implies zero curl \n      Let   be a vector field whose component functions have continuous partial derivatives on the set  . If   for some scalar function  , then   for all   . Using logical shorthand:\n       .\n     "
},
{
  "id": "proof-8",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#proof-8",
  "type": "Proof",
  "number": "2.3.3.1",
  "title": "",
  "body": "\n    If   for some some  , then\n     .\n    This shows the first component of   is the zero function. Similar reasoning shows the same is true for the second and third components.\n   "
},
{
  "id": "cor_gradient_implies_curlzero",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#cor_gradient_implies_curlzero",
  "type": "Corollary",
  "number": "2.3.14",
  "title": "Gradient implies zero curl (<span class=\"process-math\">\\(n=2\\)<\/span>).",
  "body": "Gradient implies zero curl ( ) \n      Let   be a vector field whose component functions have continuous partial derivatives on the set  . If   for some scalar function, then   for all  .\n     \n      By way of shorthand, we will understand the statement   to mean   when   is a 2-dimensional vector field.\n     \n      Identify   with the 3-dimensional vector field  . The result follows easily from  .\n     "
},
{
  "id": "eg_curltest_conclusive",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#eg_curltest_conclusive",
  "type": "Example",
  "number": "2.3.15",
  "title": "Curl test: conclusive.",
  "body": "Curl test: conclusive \n      Show that   is not a gradient vector field.\n     \n      The curl of   is the vector field\n       .\n      Thus   is not a gradient vector field by  .\n     "
},
{
  "id": "eg_curltest_inconclusive",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#eg_curltest_inconclusive",
  "type": "Example",
  "number": "2.3.16",
  "title": "Curl test: inconclusive.",
  "body": "Curl test: inconclusive \n     Let  . Show that (a)  , but (b)   is not a gradient vector field.\n     \n      The curl computation in (a) is straightforward. To see that   is not a gradient vector field, we find a closed curve   for which  . Take   to be the unit circle with parametrization  ,  . We have\n       .\n     "
},
{
  "id": "def",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#def",
  "type": "Definition",
  "number": "2.3.17",
  "title": "Simply connected sets.",
  "body": "simply connected Simply connected sets simply connected "
},
{
  "id": "th_gradient_iff_curlzero",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#th_gradient_iff_curlzero",
  "type": "Theorem",
  "number": "2.3.18",
  "title": "Gradient iff zero curl (connected and simply connected domain).",
  "body": "Gradient iff zero curl (connected and simply connected domain) \n      Let   be open, connected and simply connected. If the component functions of   have continuous partial derivatives on   then   if and only if  . Using logical shortand:\n       .\n      Note: if  , we understand   to mean  .\n     "
},
{
  "id": "th_logical_housekeeping",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#th_logical_housekeeping",
  "type": "Theorem",
  "number": "2.3.19",
  "title": "Logical housekeeping.",
  "body": "Logical housekeeping \n     Let   be a vector field on the set  . We use the abbreviations  o ,  c ,  sc  for open, connected, and simply connected. For statements involving curl, assume the partial derivatives of the component functions of   are continuous.\n     \n    Additionally, for any domain   we always have the following loop property equivalence:\n     .\n "
},
{
  "id": "eg_curltest_complete",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#eg_curltest_complete",
  "type": "Example",
  "number": "2.3.20",
  "title": "Curl test: complete.",
  "body": "Curl test: complete \n      Let  . Decide whether    is a gradient vector field. If yes, find a potential function for  .\n     \n      It is straightforward, if somewhat tiresome, to show  . Since the domain of   is  , which is connected and simply connected, we conclude from   that   is a gradient vector field. Let   be a potential function for  .\n       .\n      Looking at the partial formula for   in our last line, we observe that setting   results in the function  , which satisfies  .\n     "
},
{
  "id": "sage_curl",
  "level": "2",
  "url": "s_pathind_conservative_potential.html#sage_curl",
  "type": "Sage example",
  "number": "2.3.1",
  "title": "Computing curl.",
  "body": "Computing curl \n    Sage allows us to easily compute the curl of vector fields. Below we compute the curl of the vector field from  . The command  vector  in the cell below turns our symbolic list into a vector object.\n   \n    The same command works for vector fields of dimension 2: for  , the  curl  method returns  .\n   "
},
{
  "id": "s_Greens_theorem",
  "level": "1",
  "url": "s_Greens_theorem.html",
  "type": "Section",
  "number": "2.4",
  "title": "Green's theorem in the plane",
  "body": "Green's theorem in the plane Tangential form of Green's theorem and curl Green's theorem (circulation or tangential form) \n        Let   be a piecewise smooth simple curve with positive (counterclockwise) orientation, and let   be the region it encloses. If the component functions of   have continuous first-order partial derivatives on an open set containing  , then\n         .\n       \n        Use Green's theorem to Compute  , where   and   is the simple positively oriented curve obtained by joining the line segment from   to   the the upper half of the circle  .\n       \n\n       scalar curl -component of curl circulation density Scalar curl scalar curl  component of curl circulation density irrotational Area via line integral \n        Let   be a piecewise smooth simple curve with positive (counterclockwise) orientation, and let   be the region it encloses. If the component functions of   have continuous first-order partial derivatives on an open set containing  , and if   satisfies\n         ,\n        then\n         .\n        A typical example of such a vector field is  .\n       \n        Use   to compute the area of the astroid curve   with parametrization  ,  .\n         \n       \n\n       Scalar curl interpretation \n      If the component functions of   have continuous first-order partial derivatives on an open set containing the point  , then\n       ,\n      where   is the simple positively oriented circle of radius   centered at  .\n     Scalar curl interpretation \n      From the limit expression   we extract the valuable approximation formula\n       .\n      This can be understood as saying that the scalar component of curl at a point   is approximated by the circulation density quantity\n       ,\n      whose units are of the form unit circulation per unit area. This gives us a more concrete understanding curl as a measure of the fluid's tendency to rotate about a given  . In particular if the fluid is assumed to be  irrotational  ( ), this means that the region contains no  vortices , points about which the fluid rotates like a whirlpool.\n     Normal form of Green's theorem and divergence Green's theorem (flux or normal form) \n        Let   be a piecewise smooth simple curve with positive (counterclockwise) orientation, and let   be the region it encloses. If the component functions of   have continuous first-order partial derivatives on an open set containing  , then\n         .\n        Here   is understood to be the outward unit normal vector to  .\n       divergence divergence of vector field  Divergence divergence incompressible \n      Compute the outward flux of   across the square bounded by the lines  ,  .\n     \n\n     Divergence interpretation \n      If the component functions of   have continuous first-order partial derivatives on an open set containing the point  , then\n       ,\n      where   is the simple positively oriented circle of radius   centered at  , and   is the unit outward normal vector to  .\n     Divergence interpretation \n      From the limit expression   we extract the valuable approximation formula\n       .\n      This can be understood as saying that the divergence of   at a point   is approximated by the flux quantity\n       ,\n      whose units are of the form unit flux per unit area. This allows us to understand the divergence at   to be a measure of how the fluid flows out from or in toward  . Even more concretely, if   for all  , then it follows from   that the flux through any closed curve around  . Thus a fluid's being incompressible ( ) means that whatever amount of fluid enters a given enclosed region is equal to the amount that leaves it. In fluid dynamics this is sometimes described as there being no  sources  or  sinks  in the region.\n     \n      The vector field diagram is provided for each   below. Using our interpretations of curl and divergence, try your best to visually identify points   where   and\/or  . Confirm your answers by computing   and   algebraically. Assume   is a nonzero fixed constant.\n     \n         Uniform expansion\/compression \n         \n           \n         \n       \n         Uniform rotation \n         \n           \n         \n       \n         Shearing flow \n         \n           \n         \n       \n         Whirlpool \n         \n           \n         \n       \n\n     "
},
{
  "id": "th_Greens",
  "level": "2",
  "url": "s_Greens_theorem.html#th_Greens",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "Green's theorem (circulation or tangential form).",
  "body": "Green's theorem (circulation or tangential form) \n        Let   be a piecewise smooth simple curve with positive (counterclockwise) orientation, and let   be the region it encloses. If the component functions of   have continuous first-order partial derivatives on an open set containing  , then\n         .\n       "
},
{
  "id": "example-44",
  "level": "2",
  "url": "s_Greens_theorem.html#example-44",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "\n        Use Green's theorem to Compute  , where   and   is the simple positively oriented curve obtained by joining the line segment from   to   the the upper half of the circle  .\n       \n\n       "
},
{
  "id": "d_scalar_curl",
  "level": "2",
  "url": "s_Greens_theorem.html#d_scalar_curl",
  "type": "Definition",
  "number": "2.4.3",
  "title": "Scalar curl.",
  "body": "scalar curl -component of curl circulation density Scalar curl scalar curl  component of curl circulation density irrotational "
},
{
  "id": "cor_Greens_theorem",
  "level": "2",
  "url": "s_Greens_theorem.html#cor_Greens_theorem",
  "type": "Corollary",
  "number": "2.4.4",
  "title": "Area via line integral.",
  "body": "Area via line integral \n        Let   be a piecewise smooth simple curve with positive (counterclockwise) orientation, and let   be the region it encloses. If the component functions of   have continuous first-order partial derivatives on an open set containing  , and if   satisfies\n         ,\n        then\n         .\n        A typical example of such a vector field is  .\n       "
},
{
  "id": "example-45",
  "level": "2",
  "url": "s_Greens_theorem.html#example-45",
  "type": "Example",
  "number": "2.4.5",
  "title": "",
  "body": "\n        Use   to compute the area of the astroid curve   with parametrization  ,  .\n         \n       \n\n       "
},
{
  "id": "th_Greens_theorem__curl_interpretation",
  "level": "2",
  "url": "s_Greens_theorem.html#th_Greens_theorem__curl_interpretation",
  "type": "Theorem",
  "number": "2.4.6",
  "title": "Scalar curl interpretation.",
  "body": "Scalar curl interpretation \n      If the component functions of   have continuous first-order partial derivatives on an open set containing the point  , then\n       ,\n      where   is the simple positively oriented circle of radius   centered at  .\n     "
},
{
  "id": "rm_Greens_theorem_interpretation",
  "level": "2",
  "url": "s_Greens_theorem.html#rm_Greens_theorem_interpretation",
  "type": "Remark",
  "number": "2.4.7",
  "title": "Scalar curl interpretation.",
  "body": "Scalar curl interpretation \n      From the limit expression   we extract the valuable approximation formula\n       .\n      This can be understood as saying that the scalar component of curl at a point   is approximated by the circulation density quantity\n       ,\n      whose units are of the form unit circulation per unit area. This gives us a more concrete understanding curl as a measure of the fluid's tendency to rotate about a given  . In particular if the fluid is assumed to be  irrotational  ( ), this means that the region contains no  vortices , points about which the fluid rotates like a whirlpool.\n     "
},
{
  "id": "cor_Greens_normal",
  "level": "2",
  "url": "s_Greens_theorem.html#cor_Greens_normal",
  "type": "Corollary",
  "number": "2.4.8",
  "title": "Green's theorem (flux or normal form).",
  "body": "Green's theorem (flux or normal form) \n        Let   be a piecewise smooth simple curve with positive (counterclockwise) orientation, and let   be the region it encloses. If the component functions of   have continuous first-order partial derivatives on an open set containing  , then\n         .\n        Here   is understood to be the outward unit normal vector to  .\n       "
},
{
  "id": "d_divergence",
  "level": "2",
  "url": "s_Greens_theorem.html#d_divergence",
  "type": "Definition",
  "number": "2.4.9",
  "title": "Divergence.",
  "body": "divergence divergence of vector field  Divergence divergence incompressible "
},
{
  "id": "example-46",
  "level": "2",
  "url": "s_Greens_theorem.html#example-46",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": "\n      Compute the outward flux of   across the square bounded by the lines  ,  .\n     \n\n     "
},
{
  "id": "th_Greens_theorem_div_interpretation",
  "level": "2",
  "url": "s_Greens_theorem.html#th_Greens_theorem_div_interpretation",
  "type": "Theorem",
  "number": "2.4.11",
  "title": "Divergence interpretation.",
  "body": "Divergence interpretation \n      If the component functions of   have continuous first-order partial derivatives on an open set containing the point  , then\n       ,\n      where   is the simple positively oriented circle of radius   centered at  , and   is the unit outward normal vector to  .\n     "
},
{
  "id": "rm_Greens_theorem__normal_interpretation",
  "level": "2",
  "url": "s_Greens_theorem.html#rm_Greens_theorem__normal_interpretation",
  "type": "Remark",
  "number": "2.4.12",
  "title": "Divergence interpretation.",
  "body": "Divergence interpretation \n      From the limit expression   we extract the valuable approximation formula\n       .\n      This can be understood as saying that the divergence of   at a point   is approximated by the flux quantity\n       ,\n      whose units are of the form unit flux per unit area. This allows us to understand the divergence at   to be a measure of how the fluid flows out from or in toward  . Even more concretely, if   for all  , then it follows from   that the flux through any closed curve around  . Thus a fluid's being incompressible ( ) means that whatever amount of fluid enters a given enclosed region is equal to the amount that leaves it. In fluid dynamics this is sometimes described as there being no  sources  or  sinks  in the region.\n     "
},
{
  "id": "example-47",
  "level": "2",
  "url": "s_Greens_theorem.html#example-47",
  "type": "Example",
  "number": "2.4.13",
  "title": "",
  "body": "\n      The vector field diagram is provided for each   below. Using our interpretations of curl and divergence, try your best to visually identify points   where   and\/or  . Confirm your answers by computing   and   algebraically. Assume   is a nonzero fixed constant.\n     \n         Uniform expansion\/compression \n         \n           \n         \n       \n         Uniform rotation \n         \n           \n         \n       \n         Shearing flow \n         \n           \n         \n       \n         Whirlpool \n         \n           \n         \n       \n\n     "
},
{
  "id": "s_surfaces_area",
  "level": "1",
  "url": "s_surfaces_area.html",
  "type": "Section",
  "number": "2.5",
  "title": "Surfaces and their area",
  "body": "Surfaces and their area Surface parametrizations \n    We use two distinct methods of describing curves in   or  :  implicitly , as the set of solutions to an equation, and  parametrically  as the image of a parametrization  . For example, we typically describe the unit circle   centered at the origin either as   or  . These are abbreviated forms of the following implicit and parametric representations of  :\n     .\n    The first description is called  implicit , as it is up to us to find actual pairs   satisfying the defining equation; the parametrization, in contrast, gives us an  explit  recipe for producing points on  .\n   \n    When dealing with surfaces  , we have for the most part used implicit descriptions:  ,\n     .\n  We now supplement this method with  parametric  descriptions of surfaces.\n   parametrization of a surface Surface parametrization surface parametrization parameter domain component functions surface Plane parametrization \n      Recall that a plane   is defined (implicitly) as the set of solutions to an equation of the form\n       ,\n      where  , is called a normal vector of the plane. More geometrically, given a particular point   satisfying   , we can describe   as the set of points   for which the vector   is orthogonal to  , which we call a normal vector to the plane.\n       \n        To parametrize a plane   defined by   proceed as follows.\n         \n             \n              Find a point   on  :  , find one solution to  .\n             \n           \n             \n              Pick two nonzero vectors   that are orthogonal to   and are not scalar multiples of one another:  ,\n               .\n             \n           \n             \n              The plane   is the set of points   of the form\n               ,\n              for some choice of scalars  .\n             \n           \n             \n              If   and  , then the function   defined as\n               \n              is a parametrization of the plane  .\n             \n           \n       Plane parametrization \n      Find a parametrization of the plane  \n     .\n   \n      Looking at the equation, we can take   to be our normal vector. Next, the point   is easily seen to be a point of  . To find vectors   orthogonal to   we solve  by inspection  the linear equation\n       .\n      The vectors   and   are two such solutions, and clearly   for any  . We conclude that\n       \n      is a parametrization of  .\n\n     Plane parametrization \n    The Sage cell below caries out   and produces a plot of the plane   (using  parametric_plot3d() ) along with a chosen point  , the chosen vectors   (normalized), and the grid on the plane these two vectors define. To solve for   we use some linear algebra functions:  ,  solve_right() ,  right_kernel().basis() .\n   -level curves \n      Given a surface parametrization   a useful tool for visualizing the corresponding surface   is to consider the curves with parametrizations   obtained by setting   for different choices of  , or similarly, curves with parametrizations   obtained by setting   for different choices of  . We call such curves  - and  -level curves of the surface. They are the images under   of the rectangular grid in the parameter domain defined by the equations   and  , and they make a sort of (usually nonrectangular) grid of the surface  .\n     Sphere of radius   parametrization \n      Fix  . Spherical coordinates tells us that the points of the sphere   can be described in the form   for   and  . This gives rise to the parametrization\n       .\n    Line of the form   and   in the parameter domain   get mapped by   to latitudinal and longitudinal circles on the sphere, respectively; these are the  - and  -level curves of the parametrization.\n     Circular cylinder \n      Fix   and consider the surface parametrization\n       .\n      Fixing   for any  , we see that the corresponding curve parametrization   is a circle of radius   centered around the  -axis. Thus as we let   range between   and   the  -level curves sweep out the cylinder of radius  , centered around the  -axis, between the planes   and  .\n     Parametrizing graphs of functions \n      Recall that given a function   with domain   we define its graph to the be the surface\n       .\n      It follows directly from this description that   is parametrized by\n       .\n      Thus all graphs of functions   can be thought of as parametrized surfaces. The converse is not true: the sphere   has a surface parametrization, but it is not the graph of a function.\n     \n      More generally, if a surface is defined implicitly in the form   or   or   ( , one variable is described as a function of the others), then we have immediate parametrizations of the form  ,  ,  . This is  sometimes  a useful trick.\n     Cone parametrization \n      Let   be the half-cone  , and let   be the full cone  . Find parametrizations of   and  .\n     \n      Following  , we easily see that   is parametrized by  \n     \n      If we wanted to settle for a piecewise parametrization of   we could proceed exactly as above, parametrizing the right half of   as   and the left half as  . Instead, we use a variant of spherical coordinates. For  , let  , let   be the angle between   and the positive  -axis (as opposed to the  -axis), and let   be the angle between the positive  -axis and the projection of   onto the  -plane. With this setup we have\n       .\n      (Essentially this is just the usual spherical coordinates along with the  cyclical  renaming of the axes  .) With respect to these coordinates, the half-cone   can be described implicitly as  ,  . To get the full cone   we simply remove the restriction that   be nonnegative. This gives rise to the parametrization\n       .\n     Surface parametrizations \n  The Sage cells below use  paramatric_plot3d()  to graph some of the surfaces from the examples above, along with the level curves coming from the usual rectangular grid in the parameter domain.\n \n\n \n\n Tangent planes and area Parametrization tangent vectors - and  -tangent vectors Smooth surface parametrization \n        A surface parametrization   is smooth if on the interior of   (i) the tangent vector functions   and   are continuous and (ii)  .\n       tangent plane of smooth surface parametrization Tangent plane to smooth surface tangent plane Tangent plane \n        Let   be the surface with parametrization  . Find an equation of the tangent plane to   at the point  .\n       \n        We compute\n         .\n        At   we have\n         .\n        This   is  a  normal vector of the tangent plane. We can always scale this by any nonzero constant to get another, more convenient normal vector:  ,  . Lastly, the plane passing through   with normal vector   has defining equation\n         .\n       Surface area area \n        Fix  . Compute the area of the sphere  .\n       \n         \n             \n              First we parametrize   using\n               ,\n              as in  .\n             \n           \n             \n              Now assemble ingredients:\n               ,\n              where the last equality follows since   for   and   parametrizes points on the unit sphere!\n             \n           \n             \n              Finally, we integrate\n               .\n             \n           \n       \n        Find the surface area of the portion of the paraboloid   that lies below the plane  .\n       \n           \n            First parametrize, using cylindrical coordinates:\n             .\n            Here the region   is a polar description of the projection of   on the  -plane, obtained by first observing that the intersection of the paraboloid with the plane   is given by  , or  .\n           \n         \n           \n            Now assemble ingredients:\n             .\n           \n         \n           \n            Finally, we integrate\n             .\n           \n         \n      Note: we could have used the more straightforward parametrization  , noticing that   expresses   as a function of   and   (see  ). Interestingly, the integral in (3) for this choice of parametrization is best computed using a polar coordinates change of variable.\n     "
},
{
  "id": "d_surface_parametrizations",
  "level": "2",
  "url": "s_surfaces_area.html#d_surface_parametrizations",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Surface parametrization.",
  "body": "parametrization of a surface Surface parametrization surface parametrization parameter domain component functions surface "
},
{
  "id": "proc_surface_plane",
  "level": "2",
  "url": "s_surfaces_area.html#proc_surface_plane",
  "type": "Procedure",
  "number": "2.5.2",
  "title": "Plane parametrization.",
  "body": "Plane parametrization \n      Recall that a plane   is defined (implicitly) as the set of solutions to an equation of the form\n       ,\n      where  , is called a normal vector of the plane. More geometrically, given a particular point   satisfying   , we can describe   as the set of points   for which the vector   is orthogonal to  , which we call a normal vector to the plane.\n       \n        To parametrize a plane   defined by   proceed as follows.\n         \n             \n              Find a point   on  :  , find one solution to  .\n             \n           \n             \n              Pick two nonzero vectors   that are orthogonal to   and are not scalar multiples of one another:  ,\n               .\n             \n           \n             \n              The plane   is the set of points   of the form\n               ,\n              for some choice of scalars  .\n             \n           \n             \n              If   and  , then the function   defined as\n               \n              is a parametrization of the plane  .\n             \n           \n       "
},
{
  "id": "eg_plane_parametrization",
  "level": "2",
  "url": "s_surfaces_area.html#eg_plane_parametrization",
  "type": "Example",
  "number": "2.5.3",
  "title": "Plane parametrization.",
  "body": "Plane parametrization \n      Find a parametrization of the plane  \n     .\n   \n      Looking at the equation, we can take   to be our normal vector. Next, the point   is easily seen to be a point of  . To find vectors   orthogonal to   we solve  by inspection  the linear equation\n       .\n      The vectors   and   are two such solutions, and clearly   for any  . We conclude that\n       \n      is a parametrization of  .\n\n     "
},
{
  "id": "sage_plane_parametrization",
  "level": "2",
  "url": "s_surfaces_area.html#sage_plane_parametrization",
  "type": "Sage example",
  "number": "2.5.1",
  "title": "Plane parametrization.",
  "body": "Plane parametrization \n    The Sage cell below caries out   and produces a plot of the plane   (using  parametric_plot3d() ) along with a chosen point  , the chosen vectors   (normalized), and the grid on the plane these two vectors define. To solve for   we use some linear algebra functions:  ,  solve_right() ,  right_kernel().basis() .\n   "
},
{
  "id": "rm_uv_level_curves",
  "level": "2",
  "url": "s_surfaces_area.html#rm_uv_level_curves",
  "type": "Remark",
  "number": "2.5.4",
  "title": "<span class=\"process-math\">\\(u,v\\)<\/span>-level curves.",
  "body": "-level curves \n      Given a surface parametrization   a useful tool for visualizing the corresponding surface   is to consider the curves with parametrizations   obtained by setting   for different choices of  , or similarly, curves with parametrizations   obtained by setting   for different choices of  . We call such curves  - and  -level curves of the surface. They are the images under   of the rectangular grid in the parameter domain defined by the equations   and  , and they make a sort of (usually nonrectangular) grid of the surface  .\n     "
},
{
  "id": "eg_sphere_parametrization",
  "level": "2",
  "url": "s_surfaces_area.html#eg_sphere_parametrization",
  "type": "Example",
  "number": "2.5.5",
  "title": "Sphere of radius <span class=\"process-math\">\\(R\\)<\/span> parametrization.",
  "body": "Sphere of radius   parametrization \n      Fix  . Spherical coordinates tells us that the points of the sphere   can be described in the form   for   and  . This gives rise to the parametrization\n       .\n    Line of the form   and   in the parameter domain   get mapped by   to latitudinal and longitudinal circles on the sphere, respectively; these are the  - and  -level curves of the parametrization.\n     "
},
{
  "id": "example-50",
  "level": "2",
  "url": "s_surfaces_area.html#example-50",
  "type": "Example",
  "number": "2.5.6",
  "title": "Circular cylinder.",
  "body": "Circular cylinder \n      Fix   and consider the surface parametrization\n       .\n      Fixing   for any  , we see that the corresponding curve parametrization   is a circle of radius   centered around the  -axis. Thus as we let   range between   and   the  -level curves sweep out the cylinder of radius  , centered around the  -axis, between the planes   and  .\n     "
},
{
  "id": "eg_function_parametrization",
  "level": "2",
  "url": "s_surfaces_area.html#eg_function_parametrization",
  "type": "Example",
  "number": "2.5.7",
  "title": "Parametrizing graphs of functions.",
  "body": "Parametrizing graphs of functions \n      Recall that given a function   with domain   we define its graph to the be the surface\n       .\n      It follows directly from this description that   is parametrized by\n       .\n      Thus all graphs of functions   can be thought of as parametrized surfaces. The converse is not true: the sphere   has a surface parametrization, but it is not the graph of a function.\n     \n      More generally, if a surface is defined implicitly in the form   or   or   ( , one variable is described as a function of the others), then we have immediate parametrizations of the form  ,  ,  . This is  sometimes  a useful trick.\n     "
},
{
  "id": "example-52",
  "level": "2",
  "url": "s_surfaces_area.html#example-52",
  "type": "Example",
  "number": "2.5.8",
  "title": "Cone parametrization.",
  "body": "Cone parametrization \n      Let   be the half-cone  , and let   be the full cone  . Find parametrizations of   and  .\n     \n      Following  , we easily see that   is parametrized by  \n     \n      If we wanted to settle for a piecewise parametrization of   we could proceed exactly as above, parametrizing the right half of   as   and the left half as  . Instead, we use a variant of spherical coordinates. For  , let  , let   be the angle between   and the positive  -axis (as opposed to the  -axis), and let   be the angle between the positive  -axis and the projection of   onto the  -plane. With this setup we have\n       .\n      (Essentially this is just the usual spherical coordinates along with the  cyclical  renaming of the axes  .) With respect to these coordinates, the half-cone   can be described implicitly as  ,  . To get the full cone   we simply remove the restriction that   be nonnegative. This gives rise to the parametrization\n       .\n     "
},
{
  "id": "sage_surface_parametrizations",
  "level": "2",
  "url": "s_surfaces_area.html#sage_surface_parametrizations",
  "type": "Sage example",
  "number": "2.5.2",
  "title": "Surface parametrizations.",
  "body": "Surface parametrizations \n  The Sage cells below use  paramatric_plot3d()  to graph some of the surfaces from the examples above, along with the level curves coming from the usual rectangular grid in the parameter domain.\n \n\n \n\n "
},
{
  "id": "d_tangent_vectors",
  "level": "2",
  "url": "s_surfaces_area.html#d_tangent_vectors",
  "type": "Definition",
  "number": "2.5.9",
  "title": "Parametrization tangent vectors.",
  "body": "Parametrization tangent vectors - and  -tangent vectors "
},
{
  "id": "d_smooth_surface_parametrization",
  "level": "2",
  "url": "s_surfaces_area.html#d_smooth_surface_parametrization",
  "type": "Definition",
  "number": "2.5.10",
  "title": "Smooth surface parametrization.",
  "body": "Smooth surface parametrization \n        A surface parametrization   is smooth if on the interior of   (i) the tangent vector functions   and   are continuous and (ii)  .\n       "
},
{
  "id": "d_tangent_plane",
  "level": "2",
  "url": "s_surfaces_area.html#d_tangent_plane",
  "type": "Definition",
  "number": "2.5.11",
  "title": "Tangent plane to smooth surface.",
  "body": "tangent plane of smooth surface parametrization Tangent plane to smooth surface tangent plane "
},
{
  "id": "eg_tangent_plane",
  "level": "2",
  "url": "s_surfaces_area.html#eg_tangent_plane",
  "type": "Example",
  "number": "2.5.12",
  "title": "Tangent plane.",
  "body": "Tangent plane \n        Let   be the surface with parametrization  . Find an equation of the tangent plane to   at the point  .\n       \n        We compute\n         .\n        At   we have\n         .\n        This   is  a  normal vector of the tangent plane. We can always scale this by any nonzero constant to get another, more convenient normal vector:  ,  . Lastly, the plane passing through   with normal vector   has defining equation\n         .\n       "
},
{
  "id": "d_surface_area",
  "level": "2",
  "url": "s_surfaces_area.html#d_surface_area",
  "type": "Definition",
  "number": "2.5.13",
  "title": "Surface area.",
  "body": "Surface area area "
},
{
  "id": "example-54",
  "level": "2",
  "url": "s_surfaces_area.html#example-54",
  "type": "Example",
  "number": "2.5.14",
  "title": "",
  "body": "\n        Fix  . Compute the area of the sphere  .\n       \n         \n             \n              First we parametrize   using\n               ,\n              as in  .\n             \n           \n             \n              Now assemble ingredients:\n               ,\n              where the last equality follows since   for   and   parametrizes points on the unit sphere!\n             \n           \n             \n              Finally, we integrate\n               .\n             \n           \n       "
},
{
  "id": "example-55",
  "level": "2",
  "url": "s_surfaces_area.html#example-55",
  "type": "Example",
  "number": "2.5.15",
  "title": "",
  "body": "\n        Find the surface area of the portion of the paraboloid   that lies below the plane  .\n       \n           \n            First parametrize, using cylindrical coordinates:\n             .\n            Here the region   is a polar description of the projection of   on the  -plane, obtained by first observing that the intersection of the paraboloid with the plane   is given by  , or  .\n           \n         \n           \n            Now assemble ingredients:\n             .\n           \n         \n           \n            Finally, we integrate\n             .\n           \n         \n      Note: we could have used the more straightforward parametrization  , noticing that   expresses   as a function of   and   (see  ). Interestingly, the integral in (3) for this choice of parametrization is best computed using a polar coordinates change of variable.\n     "
},
{
  "id": "s_surfaces_integrals",
  "level": "1",
  "url": "s_surfaces_integrals.html",
  "type": "Section",
  "number": "2.6",
  "title": "Surface integrals",
  "body": "Surface integrals Surface integrals of scalar functions surface integral scalar \n     surface integral of scalar function Surface integral of scalar function surface integral Taxonomy of scalar integrals \n        It might be useful to list (and organize) all the different forms of scalar integrals we have met thus far.\n         Taxonomy of scalar integrals Independence of parametrization \n          As with scalar line integrals, it is possible to show that our definition of the surface integral of   over a smoothly parametrized surface   is independent of the parametrization chosen. (Recall that by definition a surface parametrization is one-to-one on the interior of the parameter domain.)\n         Surface integral interpretation \n          As always, the key to understanding the meaning of a surface integral is to make sense of the right-hand side of the approximation formula\n           .\n        Understanding   as an approximation of the area of one of the subpatches of  , the interpretation then depends on what the function   is. Here are two typical examples.\n         \n             Geometric: surface area \n             \n              If   (the constant function), then the right-hand side of   simply adds up  , yielding an approximation of the area of  . The integral of   computes this area exactly.\n             \n           \n             Physical: density function \n             \n              Assume   gives us the density of quantity   per unit area at position  . In this case the right-hand side of   can be understood as an approximation of the total quantity   over  , and thus the integral computes this total quantity exactly.\n             \n           \n         \n          Let   be the surface obtained by rotating the curve   \n          around the  -axis. Assume the mass density at a point   on   is given by  . Compute the total mass of   assuming the variables   are measured in cm, and   is measured in g per cm .\n         \n           \n               \n                First we parametrize  . Observe that intersecting   with the plane    yields a circle centered at   of radius  , which we can parametrize as\n                 .\n                Letting   vary between   and  , we get the parametrization\n                 .\n               \n             \n               \n                Assemble the necessary ingredients:\n                 ,\n                where the last equality follows since   for  .\n               \n             \n               \n                According to  , integrating a mass density function over   gives us the total mass of  . Thus\n                 .\n               \n             \n         piecewise smooth surface Surface integral for piecewise smooth surfaces piecewise smooth surface Piecewise smooth surface \n      Compute the surface integral of   over the tetrahedron   with vertices  .\n     \n     We have  , where the   are the four triangular faces of  , and thus\n      .\n     Let   be the triangular faces lying in the coordinate planes   and  , respectively. Since   for all points in these two surfaces, the corresponding surface integrals  ,  , are equal to zero. Thus we need only compute the integrals of   over   and  .\n     \n         Integral over    \n         \n          Let   be the face of the tetrahedron in the  -plane. We parametrize as\n           .\n          A simple computation shows  . Thus\n           \n\n         \n       \n         Integral over  \n         \n          Let   be triangle with vertices  . This is the region of the plane   lying over the planar triangle with vertices  . Since   is expressed as a function of   we parametrize easily as\n           .\n          Again, a straightforward computation shows  , and thus\n           ,\n          where we use our work from above for the last equality.\n         \n       \n    In conclusion we have\n     .\n   Surface integrals of vector fields orientation smooth surface Surface orientation orientation orientable nonorientable Orientations of the sphere outward inward torus Graph of function upward Orientations of orientable surfaces \n          Assume   is a smooth orientable surface with orientation   and parametrization  . We have the following facts:\n           \n               \n                There are exactly two orientations on  : namely, the given orientation   and its opposite  .\n               \n             \n               \n                The function\n                 \n                is one orientation on  ; the function\n                 \n                is the other.\n               \n             \n         Nonorientable surface: Möbius strip \n          Fix a constant  , and let   be the Möbius strip with parametrization\n           ,\n          where  . The Sage cell below depicts   along with the labeled line segments we used in its original description.\n         \n      Fact:   is a nonorientable surface! If this is so, why doesn't the function\n           \n          provide us with an orientation? The answer: this is a well-defined function on the  parameter domain   , but not on the actual  surface   ! Indeed, the point   can be expressed as both   and  . As the Sage cell below illustrates the two normal vectors corresponding to   and   are   and  !\n         \n         We can see what's going on by plotting some of the normal vectors given by   for points of the form  .\n         Surface integral of vector field surface integral flux Flux across a sphere \n      Let   be the sphere  . Compute the flux of   out of the sphere:  , with respect to the outward orientation on  .\n     \n      We use the usual parametrization of the sphere of radius 2:\n       \n      Given a point   the vector   is an outward pointing normal vector of magnitude  . Thus the function   is the outward orientation on  . It follows that\n       ,\n      and thus that\n       .\n      The last step above is done using the identity   and the fact that   has antiderivative  .\n     Surface integral of vector field \n      Let   be a smooth parametrization of the orientable surface  , let   be a vector field that is continuous on  , and let   be the orientation determined by  .\n      We have\n       .\n      Furthermore letting   be the opposite orientation of  , we have\n       .\n     Flux across a cone \n      Let   be the cone   and let  . Compute the flux of   across   with respect to the outward (away from the  -axis) orientation of  .\n     \n\n     "
},
{
  "id": "d_scalar_surface_integral",
  "level": "2",
  "url": "s_surfaces_integrals.html#d_scalar_surface_integral",
  "type": "Definition",
  "number": "2.6.1",
  "title": "Surface integral of scalar function.",
  "body": "surface integral scalar \n     surface integral of scalar function Surface integral of scalar function surface integral "
},
{
  "id": "rm_scalar_integrals",
  "level": "2",
  "url": "s_surfaces_integrals.html#rm_scalar_integrals",
  "type": "Remark",
  "number": "2.6.2",
  "title": "Taxonomy of scalar integrals.",
  "body": "Taxonomy of scalar integrals \n        It might be useful to list (and organize) all the different forms of scalar integrals we have met thus far.\n         Taxonomy of scalar integrals "
},
{
  "id": "rm_surface_integral_ind",
  "level": "2",
  "url": "s_surfaces_integrals.html#rm_surface_integral_ind",
  "type": "Remark",
  "number": "2.6.4",
  "title": "Independence of parametrization.",
  "body": "Independence of parametrization \n          As with scalar line integrals, it is possible to show that our definition of the surface integral of   over a smoothly parametrized surface   is independent of the parametrization chosen. (Recall that by definition a surface parametrization is one-to-one on the interior of the parameter domain.)\n         "
},
{
  "id": "interp_surface_integral_interp",
  "level": "2",
  "url": "s_surfaces_integrals.html#interp_surface_integral_interp",
  "type": "Interpretation",
  "number": "2.6.5",
  "title": "Surface integral interpretation.",
  "body": "Surface integral interpretation \n          As always, the key to understanding the meaning of a surface integral is to make sense of the right-hand side of the approximation formula\n           .\n        Understanding   as an approximation of the area of one of the subpatches of  , the interpretation then depends on what the function   is. Here are two typical examples.\n         \n             Geometric: surface area \n             \n              If   (the constant function), then the right-hand side of   simply adds up  , yielding an approximation of the area of  . The integral of   computes this area exactly.\n             \n           \n             Physical: density function \n             \n              Assume   gives us the density of quantity   per unit area at position  . In this case the right-hand side of   can be understood as an approximation of the total quantity   over  , and thus the integral computes this total quantity exactly.\n             \n           \n         "
},
{
  "id": "example-56",
  "level": "2",
  "url": "s_surfaces_integrals.html#example-56",
  "type": "Example",
  "number": "2.6.6",
  "title": "",
  "body": "\n          Let   be the surface obtained by rotating the curve   \n          around the  -axis. Assume the mass density at a point   on   is given by  . Compute the total mass of   assuming the variables   are measured in cm, and   is measured in g per cm .\n         \n           \n               \n                First we parametrize  . Observe that intersecting   with the plane    yields a circle centered at   of radius  , which we can parametrize as\n                 .\n                Letting   vary between   and  , we get the parametrization\n                 .\n               \n             \n               \n                Assemble the necessary ingredients:\n                 ,\n                where the last equality follows since   for  .\n               \n             \n               \n                According to  , integrating a mass density function over   gives us the total mass of  . Thus\n                 .\n               \n             \n         "
},
{
  "id": "d_surface_integral_piecewise",
  "level": "2",
  "url": "s_surfaces_integrals.html#d_surface_integral_piecewise",
  "type": "Definition",
  "number": "2.6.7",
  "title": "Surface integral for piecewise smooth surfaces.",
  "body": "piecewise smooth surface Surface integral for piecewise smooth surfaces piecewise smooth surface "
},
{
  "id": "example-57",
  "level": "2",
  "url": "s_surfaces_integrals.html#example-57",
  "type": "Example",
  "number": "2.6.8",
  "title": "Piecewise smooth surface.",
  "body": "Piecewise smooth surface \n      Compute the surface integral of   over the tetrahedron   with vertices  .\n     \n     We have  , where the   are the four triangular faces of  , and thus\n      .\n     Let   be the triangular faces lying in the coordinate planes   and  , respectively. Since   for all points in these two surfaces, the corresponding surface integrals  ,  , are equal to zero. Thus we need only compute the integrals of   over   and  .\n     \n         Integral over    \n         \n          Let   be the face of the tetrahedron in the  -plane. We parametrize as\n           .\n          A simple computation shows  . Thus\n           \n\n         \n       \n         Integral over  \n         \n          Let   be triangle with vertices  . This is the region of the plane   lying over the planar triangle with vertices  . Since   is expressed as a function of   we parametrize easily as\n           .\n          Again, a straightforward computation shows  , and thus\n           ,\n          where we use our work from above for the last equality.\n         \n       \n    In conclusion we have\n     .\n   "
},
{
  "id": "d_orientation",
  "level": "2",
  "url": "s_surfaces_integrals.html#d_orientation",
  "type": "Definition",
  "number": "2.6.9",
  "title": "Surface orientation.",
  "body": "orientation smooth surface Surface orientation orientation orientable nonorientable "
},
{
  "id": "eg_orientable_sphere",
  "level": "2",
  "url": "s_surfaces_integrals.html#eg_orientable_sphere",
  "type": "Example",
  "number": "2.6.10",
  "title": "Orientations of the sphere.",
  "body": "Orientations of the sphere outward inward torus "
},
{
  "id": "eg_orientable_graph",
  "level": "2",
  "url": "s_surfaces_integrals.html#eg_orientable_graph",
  "type": "Example",
  "number": "2.6.11",
  "title": "Graph of function.",
  "body": "Graph of function upward "
},
{
  "id": "rm_orientable",
  "level": "2",
  "url": "s_surfaces_integrals.html#rm_orientable",
  "type": "Remark",
  "number": "2.6.12",
  "title": "Orientations of orientable surfaces.",
  "body": "Orientations of orientable surfaces \n          Assume   is a smooth orientable surface with orientation   and parametrization  . We have the following facts:\n           \n               \n                There are exactly two orientations on  : namely, the given orientation   and its opposite  .\n               \n             \n               \n                The function\n                 \n                is one orientation on  ; the function\n                 \n                is the other.\n               \n             \n         "
},
{
  "id": "sage_moebius_strip",
  "level": "2",
  "url": "s_surfaces_integrals.html#sage_moebius_strip",
  "type": "Sage example",
  "number": "2.6.1",
  "title": "Nonorientable surface: Möbius strip.",
  "body": "Nonorientable surface: Möbius strip \n          Fix a constant  , and let   be the Möbius strip with parametrization\n           ,\n          where  . The Sage cell below depicts   along with the labeled line segments we used in its original description.\n         \n      Fact:   is a nonorientable surface! If this is so, why doesn't the function\n           \n          provide us with an orientation? The answer: this is a well-defined function on the  parameter domain   , but not on the actual  surface   ! Indeed, the point   can be expressed as both   and  . As the Sage cell below illustrates the two normal vectors corresponding to   and   are   and  !\n         \n         We can see what's going on by plotting some of the normal vectors given by   for points of the form  .\n         "
},
{
  "id": "d_surface_integral_vector",
  "level": "2",
  "url": "s_surfaces_integrals.html#d_surface_integral_vector",
  "type": "Definition",
  "number": "2.6.13",
  "title": "Surface integral of vector field.",
  "body": "Surface integral of vector field surface integral flux "
},
{
  "id": "example-60",
  "level": "2",
  "url": "s_surfaces_integrals.html#example-60",
  "type": "Example",
  "number": "2.6.14",
  "title": "Flux across a sphere.",
  "body": "Flux across a sphere \n      Let   be the sphere  . Compute the flux of   out of the sphere:  , with respect to the outward orientation on  .\n     \n      We use the usual parametrization of the sphere of radius 2:\n       \n      Given a point   the vector   is an outward pointing normal vector of magnitude  . Thus the function   is the outward orientation on  . It follows that\n       ,\n      and thus that\n       .\n      The last step above is done using the identity   and the fact that   has antiderivative  .\n     "
},
{
  "id": "th_surface_integral_vector",
  "level": "2",
  "url": "s_surfaces_integrals.html#th_surface_integral_vector",
  "type": "Theorem",
  "number": "2.6.15",
  "title": "Surface integral of vector field.",
  "body": "Surface integral of vector field \n      Let   be a smooth parametrization of the orientable surface  , let   be a vector field that is continuous on  , and let   be the orientation determined by  .\n      We have\n       .\n      Furthermore letting   be the opposite orientation of  , we have\n       .\n     "
},
{
  "id": "eg_surface_integral_vector_cone",
  "level": "2",
  "url": "s_surfaces_integrals.html#eg_surface_integral_vector_cone",
  "type": "Example",
  "number": "2.6.16",
  "title": "Flux across a cone.",
  "body": "Flux across a cone \n      Let   be the cone   and let  . Compute the flux of   across   with respect to the outward (away from the  -axis) orientation of  .\n     \n\n     "
},
{
  "id": "s_Stokes",
  "level": "1",
  "url": "s_Stokes.html",
  "type": "Section",
  "number": "2.7",
  "title": "Stokes's theorem",
  "body": "Stokes's theorem Induced orientation induced right-hand rule orientation piecewise smooth surface Orientation of piecewise smooth surface \n          Let   be a piecewise smooth surface, and assume each surface   is orientable. An orientation of   is a choice of orientations   on each surface   such that the following condition is satisfied: given any two surfaces   intersecting in the curve  , the orientation induced on   by the orientation  \n          is the opposite of the orientation induced by the orientation  .\n         Stokes's theorem \n          Let   be a piecewise smooth oriented surface whose boundary   is a union of closed, piecewise smooth, simple curves. If   is a continuous vector field whose component functions have continuous first-order partial derivatives on an open set containing  , then\n           ,\n          where (a)   is the orientation of   and (b) the line integral is computed with respect to the induced orientation on  .\n\n         Line integral over triangle \n          Let   be the triangle with vertices   oriented counterclockwise from above. Compute  , where  .\n         \n           \n               Identify as boundary of surface \n               \n                We have  , where   is the triangular region enclosed by  .\n               \n             \n               Parametrize surface \n               \n                The region   is the region of the plane   lying above the triangular region  . Writing  , we have parametrization\n                 .\n               \n             \n               Identify appropriate orientation of surface \n               \n                For the induced orientation on   to be counterclockwise from above, we want the  upward  orientation on  . We know that for a parametrization of the form   the orientation\n                 \n                is the upward one. For the step below we need just the denominator of this expression:  .\n               \n             \n               Integrate  \n               \n                A straightforward computation gives us  . Using   we have\n                 \n               \n             \n         Stokes over a pringle \n          Let   be a portion of the surface   lying within the cylinder  , and let   be its boundary. Let   be the upward orientation on  . Verify Stokes's theorem for  , and the vector field  .\n         \n          I include this mainly as a nice parametrization example. The surface is parametrized using cylindrical coordinates as\n           ,\n          and the boundary curve   with counterclockwise orientation has parametrization\n           .\n          (Evaluate Sage cell below for a visualization.)\n          Next compute\n           .\n          Since the  -component of   is  , we see that it gives rise to the given choice of  upward  orientation. With all the ingredients assembled, I leave it to you to verify that\n           .\n         Two surfaces, same boundary \n        Let   be two piecewise smooth oriented surfaces with a shared boundary curve   satisfying the conditions of Stokes's theorem, and assume that the orientation on   induced by   is equal to the orientation induced by  . If   is a continuous vector field whose component functions have continuous partial derivatives on an open set containing   and  , then\n         ,\n         where   are the orientations of  , respectively.\n       \n        Let  , and let   be the intersection of the cylinder   and the plane  . Compute  , where   is oriented counterclockwise, viewed from above.\n       Solution 1 \n        The curve   is the boundary of the elliptical region   it encloses in the plane  . Since   for points on this plane, we can parametrize as\n         .\n        Assembling ingredients we have\n         .\n        Since the  -component of   is nonnegative, we see that this gives rise to the  upward  orientation on  , which induces the counterclockwise orientation on  . We can now use Stokes's theorem to concude\n         \n       Solution 2 \n      Alternatively, we can treat   as the boundary of the piecewise smooth surface  , where   is the portion of the cylinder   above the  -plane and below the plane  , and   is the disc   in the  -plane. To have the given orientation of   be induced by that of  , we must choose the  inward  orientation   on  \n      : this orientation is  inward  on the cylinder   and  upward  on the disc  . With this setup we have\n       .\n      A few comments are in order. We have   because the normal vectors to the cylinder   point horizontally, and thus are orthogonal to the curl vectors  , which point vertically. Secondly, on the disc in the  -plane we clearly have the upward normal vector equal to  .\n       \n        Show that Stokes's theorem implies Green's theorem.\n       \n        Let   be the region enclosed by a simple, piecewise smooth planar curve   oriented counterclockwise, and suppose   satisfies the conditions of  . Define  , and think of   as a planar surface living in the  -plane, with   is boundary. We choose the orientation   on  , which induces the counterclockwise orientation on  . By Stokes's theorem we have\n         .\n       Curl interpretation \n        Assume the component functions of   have continuous first-order partial derivatives on an open set containing the point  . Let   be any unit vector, and for all  , let   be the circle of radius   centered at   and lying in the plane orthogonal to  . We have\n         ,\n        where the orientation of   is chosen to be counterclockwise with respect to  . As such, we interpret the quantity   as the  circulation density  (in units circulation per unit area) of   at   with respect to the axis of rotation  .\n       "
},
{
  "id": "d_induced_orientation",
  "level": "2",
  "url": "s_Stokes.html#d_induced_orientation",
  "type": "Definition",
  "number": "2.7.1",
  "title": "Induced orientation.",
  "body": "Induced orientation induced right-hand rule "
},
{
  "id": "d_orientation_piecewise",
  "level": "2",
  "url": "s_Stokes.html#d_orientation_piecewise",
  "type": "Definition",
  "number": "2.7.2",
  "title": "Orientation of piecewise smooth surface.",
  "body": "orientation piecewise smooth surface Orientation of piecewise smooth surface \n          Let   be a piecewise smooth surface, and assume each surface   is orientable. An orientation of   is a choice of orientations   on each surface   such that the following condition is satisfied: given any two surfaces   intersecting in the curve  , the orientation induced on   by the orientation  \n          is the opposite of the orientation induced by the orientation  .\n         "
},
{
  "id": "th_Stokes",
  "level": "2",
  "url": "s_Stokes.html#th_Stokes",
  "type": "Theorem",
  "number": "2.7.3",
  "title": "Stokes's theorem.",
  "body": "Stokes's theorem \n          Let   be a piecewise smooth oriented surface whose boundary   is a union of closed, piecewise smooth, simple curves. If   is a continuous vector field whose component functions have continuous first-order partial derivatives on an open set containing  , then\n           ,\n          where (a)   is the orientation of   and (b) the line integral is computed with respect to the induced orientation on  .\n\n         "
},
{
  "id": "example-62",
  "level": "2",
  "url": "s_Stokes.html#example-62",
  "type": "Example",
  "number": "2.7.4",
  "title": "Line integral over triangle.",
  "body": "Line integral over triangle \n          Let   be the triangle with vertices   oriented counterclockwise from above. Compute  , where  .\n         \n           \n               Identify as boundary of surface \n               \n                We have  , where   is the triangular region enclosed by  .\n               \n             \n               Parametrize surface \n               \n                The region   is the region of the plane   lying above the triangular region  . Writing  , we have parametrization\n                 .\n               \n             \n               Identify appropriate orientation of surface \n               \n                For the induced orientation on   to be counterclockwise from above, we want the  upward  orientation on  . We know that for a parametrization of the form   the orientation\n                 \n                is the upward one. For the step below we need just the denominator of this expression:  .\n               \n             \n               Integrate  \n               \n                A straightforward computation gives us  . Using   we have\n                 \n               \n             \n         "
},
{
  "id": "example-63",
  "level": "2",
  "url": "s_Stokes.html#example-63",
  "type": "Example",
  "number": "2.7.5",
  "title": "Stokes over a pringle.",
  "body": "Stokes over a pringle \n          Let   be a portion of the surface   lying within the cylinder  , and let   be its boundary. Let   be the upward orientation on  . Verify Stokes's theorem for  , and the vector field  .\n         \n          I include this mainly as a nice parametrization example. The surface is parametrized using cylindrical coordinates as\n           ,\n          and the boundary curve   with counterclockwise orientation has parametrization\n           .\n          (Evaluate Sage cell below for a visualization.)\n          Next compute\n           .\n          Since the  -component of   is  , we see that it gives rise to the given choice of  upward  orientation. With all the ingredients assembled, I leave it to you to verify that\n           .\n         "
},
{
  "id": "cor_Stokes_same_boundary",
  "level": "2",
  "url": "s_Stokes.html#cor_Stokes_same_boundary",
  "type": "Corollary",
  "number": "2.7.6",
  "title": "Two surfaces, same boundary.",
  "body": "Two surfaces, same boundary \n        Let   be two piecewise smooth oriented surfaces with a shared boundary curve   satisfying the conditions of Stokes's theorem, and assume that the orientation on   induced by   is equal to the orientation induced by  . If   is a continuous vector field whose component functions have continuous partial derivatives on an open set containing   and  , then\n         ,\n         where   are the orientations of  , respectively.\n       "
},
{
  "id": "example-64",
  "level": "2",
  "url": "s_Stokes.html#example-64",
  "type": "Example",
  "number": "2.7.7",
  "title": "",
  "body": "\n        Let  , and let   be the intersection of the cylinder   and the plane  . Compute  , where   is oriented counterclockwise, viewed from above.\n       Solution 1 \n        The curve   is the boundary of the elliptical region   it encloses in the plane  . Since   for points on this plane, we can parametrize as\n         .\n        Assembling ingredients we have\n         .\n        Since the  -component of   is nonnegative, we see that this gives rise to the  upward  orientation on  , which induces the counterclockwise orientation on  . We can now use Stokes's theorem to concude\n         \n       Solution 2 \n      Alternatively, we can treat   as the boundary of the piecewise smooth surface  , where   is the portion of the cylinder   above the  -plane and below the plane  , and   is the disc   in the  -plane. To have the given orientation of   be induced by that of  , we must choose the  inward  orientation   on  \n      : this orientation is  inward  on the cylinder   and  upward  on the disc  . With this setup we have\n       .\n      A few comments are in order. We have   because the normal vectors to the cylinder   point horizontally, and thus are orthogonal to the curl vectors  , which point vertically. Secondly, on the disc in the  -plane we clearly have the upward normal vector equal to  .\n       "
},
{
  "id": "example-65",
  "level": "2",
  "url": "s_Stokes.html#example-65",
  "type": "Example",
  "number": "2.7.8",
  "title": "",
  "body": "\n        Show that Stokes's theorem implies Green's theorem.\n       \n        Let   be the region enclosed by a simple, piecewise smooth planar curve   oriented counterclockwise, and suppose   satisfies the conditions of  . Define  , and think of   as a planar surface living in the  -plane, with   is boundary. We choose the orientation   on  , which induces the counterclockwise orientation on  . By Stokes's theorem we have\n         .\n       "
},
{
  "id": "th_Stokes_interpretation_curl",
  "level": "2",
  "url": "s_Stokes.html#th_Stokes_interpretation_curl",
  "type": "Theorem",
  "number": "2.7.9",
  "title": "Curl interpretation.",
  "body": "Curl interpretation \n        Assume the component functions of   have continuous first-order partial derivatives on an open set containing the point  . Let   be any unit vector, and for all  , let   be the circle of radius   centered at   and lying in the plane orthogonal to  . We have\n         ,\n        where the orientation of   is chosen to be counterclockwise with respect to  . As such, we interpret the quantity   as the  circulation density  (in units circulation per unit area) of   at   with respect to the axis of rotation  .\n       "
},
{
  "id": "s_Divergence",
  "level": "1",
  "url": "s_Divergence.html",
  "type": "Section",
  "number": "2.8",
  "title": "Divergence theorem",
  "body": "Divergence theorem closed Divergence (or Gauss's) theorem \n          Let   be a bounded solid region whose boundary   is a union of finitely many piecewise smooth surfaces. Let   be the outward orientation on  . If   is a continuous vector field whose component functions have continuous first-order partial derivatives on an open set containing  , then\n           .\n         Flux out of cube \n        Let   be the cube in the first octant bounded by the planes  . Compute the outward flux of  .\n         \n          Let   be the solid cube  . Since   clearly satisfies the conditions for the divergence theorem, we have\n           .\n         Zero divergence implies zero flux \n          Assume the solid region  , its boundary  , and the vector field   satisfy the conditions of the divergence theorem. If   for all  , then  , for any orientation of  .\n         \n          An easy consequence of the divergence theorem:\n           .\n         Identical flux \n          Suppose the solid region   has piecewise smooth boundary surface  , where   is the outer boundary of   and   is its inner boundary. If   satisfies the conditions of the divergence theorem and   on  , then\n           ,\n          where for both surface integrals   is taken to be the outer orientation with respect to the surface.\n         \n          Let   be the solid regions enclosed by   and  , respectively (so that  ). Notice that if   is the outward orientation on  , considered as the boundary of  , then   is the outward orientation on   considered as a boundary of  . By the divergence theorem we have\n           .\n          We conclude that\n           ,\n          as desired.\n         \n          If the component functions of   have continuous second-order partial derivatives on the set  , then\n           \n          for all  .\n         \n          We have\n           ,\n          where in the last step we have used Clairaut's theorem to identify the various  mixed partials :  ,  ,  ,  .\n         Gradient, curl, divergence sequence \n          Let   be an open set. Define   as the set of all functions\n            whose component functions have partial derivatives of all orders. We can think of  ,  ,   as defining a sequence of operators on such collections of functions.\n           \n      We use this sequence to conveniently summarize some of our theoretical results about these operators as follows:\n       \n           \n            Applying two operators in sequence results in a zero function (  and  ). In other words the image of any one of these operators lies within the set of a functions mapping to zero when applying the next operator.\n           \n         \n           \n            If   is simply connected, then any vector field that is mapped to   by   is in the image of  .\n           \n         \n           \n            If   is  contractible  (too technical to define here), then any vector field that is mapped to   by   is in the image of  .\n           \n         \n         Curl field has zero flux \n          Assume the solid region  , its boundary  , and the vector field   satisfy the conditions of the divergence theorem. If   for some vector field  , then\n           .\n         \n          This is an easy consequence of   and   since\n           .\n         Gauss's law \n          Given a a point charge   located at the origin in  , the electrostatic field it produces is given by\n           \n          where   and   is a physical constant called the  permittivity of free space . Prove Gauss's law: if   is a smooth closed surface with outward orientation then\n           \n        Gauss's law can be generalized to a situation where the surface   encloses a region   with continuous charge density  . If   is the resulting electrostatic field, then\n         ,\n        where   is the total charge enclosed by  .\n         \n          First observe that   satisfies the conditions of the divergence theorem on any solid region that does not contain the origin. Furthermore, a (somewhat onerous) computation shows that\n           \n          for all  . It follows that if   does not enclose the origin, then the divergence theorem applies to the solid region   it encloses, and we have\n           .\n          Next, assume   does enclose the origin. Pick   small enough so that the solid ball   centered at the origin lies inside  , and let   be the region within   and outside of  . Since   does not contain the origin,   satisfies the conditions of the divergence theorem. By  , it follows that\n           ,\n          where   is the sphere of radius   centered at the origin. It remains only to show that\n           ,\n          which one can show directly using the definition of the surface integral and the standard parametrization of  . Indeed, the outward unit normal vector on    at a point   is given by  , and thus for all   we have\n           .\n          Finally, using the usual parametrization\n           ,\n          which satisfies\n           ,\n          we have\n           ,\n          as desired!\n         Divergence interpretation \n          Assume the component functions of   have continuous first-order partial derivatives on an open set containing the point  . For all  , let   be the sphere of radius   centered at   with outward orientation. We have\n           .\n          Thus we interpret   as the  flux density  of   at  , measured in unit flux per unit volume.\n         \n        For all   let   be the solid ball of radius   centered at  . We have   and so by the divergence theorem\n         .\n        Next a generalization of the integral average value theorem to triple integrals imlies\n         \n        for some point   in the ball   centered around  . Since   is continuous at   we have\n         .\n\n\n       "
},
{
  "id": "d_closed_surface",
  "level": "2",
  "url": "s_Divergence.html#d_closed_surface",
  "type": "Definition",
  "number": "2.8.1",
  "title": "",
  "body": "closed "
},
{
  "id": "th_Divergence",
  "level": "2",
  "url": "s_Divergence.html#th_Divergence",
  "type": "Theorem",
  "number": "2.8.2",
  "title": "Divergence (or Gauss's) theorem.",
  "body": "Divergence (or Gauss's) theorem \n          Let   be a bounded solid region whose boundary   is a union of finitely many piecewise smooth surfaces. Let   be the outward orientation on  . If   is a continuous vector field whose component functions have continuous first-order partial derivatives on an open set containing  , then\n           .\n         "
},
{
  "id": "eg_Divergence",
  "level": "2",
  "url": "s_Divergence.html#eg_Divergence",
  "type": "Example",
  "number": "2.8.3",
  "title": "Flux out of cube.",
  "body": "Flux out of cube \n        Let   be the cube in the first octant bounded by the planes  . Compute the outward flux of  .\n         \n          Let   be the solid cube  . Since   clearly satisfies the conditions for the divergence theorem, we have\n           .\n         "
},
{
  "id": "cor_divergence_zero",
  "level": "2",
  "url": "s_Divergence.html#cor_divergence_zero",
  "type": "Corollary",
  "number": "2.8.4",
  "title": "Zero divergence implies zero flux.",
  "body": "Zero divergence implies zero flux \n          Assume the solid region  , its boundary  , and the vector field   satisfy the conditions of the divergence theorem. If   for all  , then  , for any orientation of  .\n         \n          An easy consequence of the divergence theorem:\n           .\n         "
},
{
  "id": "cor_equal_flux",
  "level": "2",
  "url": "s_Divergence.html#cor_equal_flux",
  "type": "Corollary",
  "number": "2.8.5",
  "title": "Identical flux.",
  "body": "Identical flux \n          Suppose the solid region   has piecewise smooth boundary surface  , where   is the outer boundary of   and   is its inner boundary. If   satisfies the conditions of the divergence theorem and   on  , then\n           ,\n          where for both surface integrals   is taken to be the outer orientation with respect to the surface.\n         \n          Let   be the solid regions enclosed by   and  , respectively (so that  ). Notice that if   is the outward orientation on  , considered as the boundary of  , then   is the outward orientation on   considered as a boundary of  . By the divergence theorem we have\n           .\n          We conclude that\n           ,\n          as desired.\n         "
},
{
  "id": "th_div_curl",
  "level": "2",
  "url": "s_Divergence.html#th_div_curl",
  "type": "Theorem",
  "number": "2.8.6",
  "title": "<span class=\"process-math\">\\(\\diver\\curl\\boldF=0\\)<\/span>.",
  "body": "\n          If the component functions of   have continuous second-order partial derivatives on the set  , then\n           \n          for all  .\n         \n          We have\n           ,\n          where in the last step we have used Clairaut's theorem to identify the various  mixed partials :  ,  ,  ,  .\n         "
},
{
  "id": "rm_grad_curl_div",
  "level": "2",
  "url": "s_Divergence.html#rm_grad_curl_div",
  "type": "Remark",
  "number": "2.8.7",
  "title": "Gradient, curl, divergence sequence.",
  "body": "Gradient, curl, divergence sequence \n          Let   be an open set. Define   as the set of all functions\n            whose component functions have partial derivatives of all orders. We can think of  ,  ,   as defining a sequence of operators on such collections of functions.\n           \n      We use this sequence to conveniently summarize some of our theoretical results about these operators as follows:\n       \n           \n            Applying two operators in sequence results in a zero function (  and  ). In other words the image of any one of these operators lies within the set of a functions mapping to zero when applying the next operator.\n           \n         \n           \n            If   is simply connected, then any vector field that is mapped to   by   is in the image of  .\n           \n         \n           \n            If   is  contractible  (too technical to define here), then any vector field that is mapped to   by   is in the image of  .\n           \n         \n         "
},
{
  "id": "cor_flux_curl",
  "level": "2",
  "url": "s_Divergence.html#cor_flux_curl",
  "type": "Corollary",
  "number": "2.8.8",
  "title": "Curl field has zero flux.",
  "body": "Curl field has zero flux \n          Assume the solid region  , its boundary  , and the vector field   satisfy the conditions of the divergence theorem. If   for some vector field  , then\n           .\n         \n          This is an easy consequence of   and   since\n           .\n         "
},
{
  "id": "example-67",
  "level": "2",
  "url": "s_Divergence.html#example-67",
  "type": "Example",
  "number": "2.8.9",
  "title": "Gauss's law.",
  "body": "Gauss's law \n          Given a a point charge   located at the origin in  , the electrostatic field it produces is given by\n           \n          where   and   is a physical constant called the  permittivity of free space . Prove Gauss's law: if   is a smooth closed surface with outward orientation then\n           \n        Gauss's law can be generalized to a situation where the surface   encloses a region   with continuous charge density  . If   is the resulting electrostatic field, then\n         ,\n        where   is the total charge enclosed by  .\n         \n          First observe that   satisfies the conditions of the divergence theorem on any solid region that does not contain the origin. Furthermore, a (somewhat onerous) computation shows that\n           \n          for all  . It follows that if   does not enclose the origin, then the divergence theorem applies to the solid region   it encloses, and we have\n           .\n          Next, assume   does enclose the origin. Pick   small enough so that the solid ball   centered at the origin lies inside  , and let   be the region within   and outside of  . Since   does not contain the origin,   satisfies the conditions of the divergence theorem. By  , it follows that\n           ,\n          where   is the sphere of radius   centered at the origin. It remains only to show that\n           ,\n          which one can show directly using the definition of the surface integral and the standard parametrization of  . Indeed, the outward unit normal vector on    at a point   is given by  , and thus for all   we have\n           .\n          Finally, using the usual parametrization\n           ,\n          which satisfies\n           ,\n          we have\n           ,\n          as desired!\n         "
},
{
  "id": "th_Divergence_interpretation_curl",
  "level": "2",
  "url": "s_Divergence.html#th_Divergence_interpretation_curl",
  "type": "Theorem",
  "number": "2.8.10",
  "title": "Divergence interpretation.",
  "body": "Divergence interpretation \n          Assume the component functions of   have continuous first-order partial derivatives on an open set containing the point  . For all  , let   be the sphere of radius   centered at   with outward orientation. We have\n           .\n          Thus we interpret   as the  flux density  of   at  , measured in unit flux per unit volume.\n         "
},
{
  "id": "proof-14",
  "level": "2",
  "url": "s_Divergence.html#proof-14",
  "type": "Proof",
  "number": "2.8.1",
  "title": "",
  "body": "\n        For all   let   be the solid ball of radius   centered at  . We have   and so by the divergence theorem\n         .\n        Next a generalization of the integral average value theorem to triple integrals imlies\n         \n        for some point   in the ball   centered around  . Since   is continuous at   we have\n         .\n\n\n       "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": "Notation "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": "Definitions "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory and procedures",
  "body": "Theory and procedures "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "D",
  "title": "Examples",
  "body": "Examples "
},
{
  "id": "appendix-sage",
  "level": "1",
  "url": "appendix-sage.html",
  "type": "Appendix",
  "number": "E",
  "title": "Sage examples",
  "body": "Sage examples "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "Index "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
