Dashes and hyphens
Content:
The common “hyphen”
The Unicode dashes
Line breaking rules
MS Word specialties
Typographic usage
A closer look at English usage
References
The common “hyphen”
The character commonly known as hyphen originated in early typewriters. The character repertoire had to be kept small, so several characters such as hyphen, en dash, em dash, and minus sign were lumped together. In modern character code standards, the character is called “hyphen-minus” to reflect its ambiguity, but it’s really more ambiguous than the name suggests. It is best to call it “Ascii hyphen”.

This document discusses various dashes and hyphens—loosely speaking, those characters for which we have used Ascii hyphens as surrogates, in lack of anything better.

The Unicode dashes
In Unicode, there is a rather large collection of hyphen- or dash-like characters. Specifically, there is an official list [Unicode, chapter 6, Table 6-3], which is presented here as amended with some additional reference information. This table also has, with gray background, a row for the soft hyphen, which belonged to the corresponding table in Unicode 3 but is just mentioned after the table in the current version, and some other characters that were in the table in previous versions of the standard, but not in the current one.

Unicode Dash Characters
glyph	codes	name	notes on the meaning and usage
-	U+002D	&#45;	hyphen-minus	the Ascii hyphen, with multiple usage, or “ambiguous semantic value”; the width should be “average”
~	U+007E	&#126;	tilde	the Ascii tilde, with multiple usage; “swung dash”
­	U+00AD	&#173;	soft hyphen	“discretionary hyphen”
֊	U+058A	&#1418;	armenian hyphen	as soft hyphen, but different in shape
־	U+05BE	&#1470;	hebrew punctuation maqaf	word hyphen in Hebrew
᐀	U+1400	&#5120;	canadian syllabics hyphen	used in Canadian Aboriginal Syllabics
᠆	U+1806	&#6150;	mongolian todo soft hyphen	as soft hyphen, but displayed at the beginning of the second line
‐	U+2010	&#8208;	hyphen	unambiguously a hyphen character, as in “left-to-right”; narrow width
‑	U+2011	&#8209;	non-breaking hyphen	as hyphen (U+2010), but not an allowed line break point
‒	U+2012	&#8210;	figure dash	as hyphen-minus, but has the same width as digits
–	U+2013	&#8211;	en dash	used e.g. to indicate a range of values
—	U+2014	&#8212;	em dash	used e.g. to make a break in the flow of a sentence
―	U+2015	&#8213;	horizontal bar	used to introduce quoted text in some typographic styles; “quotation dash”; often (e.g., in the rep­re­sen­ta­tive glyph in the Unicode standard) longer than em dash
⁓	U+2053	&#8275;	swung dash	like a large tilde
⁻	U+207B	&#8315;	superscript minus	a compatibility character which is equivalent to minus sign U+2212 in superscript style
₋	U+208B	&#8331;	subscript minus	a compatibility character which is equivalent to minus sign U+2212 in subscript style
−	U+2212	&#8722;	minus sign	an arithmetic operator; the glyph may look the same as the glyph for a hyphen-minus, or may be longer ;
⸗	U+2E17	&#11799;	double oblique hyphen	used in ancient Near-Eastern linguistics; not in Fraktur, but the glyph of Ascii hyphen or hyphen is similar to this character in Fraktur fonts
⸺	U+2E3A	&#11834;	two-em dash	omission dash, 2 em units wide
⸻	U+2E3B	&#11835;	three-em dash	used in bibliographies, 3 em units wide
〜	U+301C	&#12316;	wave dash	a Chinese/Japanese/Korean character
〰	U+3030	&#12336;	wavy dash	a Chinese/Japanese/Korean character
゠	U+30A0	&#12448;	katakana-hiragana double hyphen	in Japasene kana writing
︱	U+FE31	&#65073;	presentation form for vertical em dash	vertical variant of em dash
︲	U+FE32	&#65074	presentation form for vertical en dash	vertical variant of en dash
﹘	U+FE58	&#65112;	small em dash	small variant of em dash
﹣	U+FE63	&#65123;	small hyphen-minus	small variant of Ascii hyphen
－	U+FF0D	&#65293;	fullwidth hyphen-minus	variant of Ascii hyphen for use with CJK characters
The first column above may not actually display the glyph correctly, depending on your browser and on the fonts available on your system.

The notes in the table above are not from Table 6-3 of the standard, but they reflect the statements in the standard elsewhere. It is questionable why all those, and exactly those, characters are listed as “Dash Characters” there. There is nothing particularly hyphen-like or dash-like in the tilde character, for example.

On the other hand, hyphen with diaeresis is not included in the table, although it has the General Category value of Pd (Punctuation, Dash).

There is also a Tibetan character (༌) that is characterized as a nonbreaking hyphen but not listed in Table 6-3: “The Unicode standard includes two nonbreaking hyphen characters: U+2011 non-breaking hyphen and U+0F0C tibetan mark delimiter tsheg bstar.” [Unicode, chapter 23] However, this character does not look like a hyphen and does not act like a hyphen; rather, it is a morpheme delimiter in Tibetan text.

The swung dash character was added in Unicode 4, and most fonts do not contain it. The phrase “swung dash” normally means a character used, for brevity, in dictionaries to stand for a word or part of word that occurred previously. In appearance, it is like a large version of tilde ~, and the tilde has often been used in the role of a swung dash, as the alternate name of tilde suggests.

The character hyphen bullet U+2043 is not listed among the dash characters, and there is no cross reference in the description of the hyphen bullet in the code chart. It seems that the hyphen bullet is really meant to be a bullet character that looks like a hyphen (of a kind), rather than comparable to hyphens and dashes.

Hyphens and dashes in line breaking rules
For a general discussion on line breaking, please refer to Unicode line breaking rules: explanations and criticism. The Unicode Standard Annex #14 Unicode Line Breaking Algorithms contains most of the information on line breaking in the standard. Note that the annex is a part of the standard. It’s really technical, and the properties assigned to individual characters are in a large data file, so I have composed a summary table.

Line breaking properties for some Unicode dashes and hyphens
glyph	code	name	line breaking property class
-	U+002D	hyphen-minus	HY, Hyphen: provide a line break opportunity after the character, except in numeric context
~	U+007E	tilde	AL, Ordinary Alphabetic and Symbol Characters
­	U+00AD	soft hyphen	BA, Break Opportunity After: generally provide a line break opportunity after the character
֊	U+058A	armenian hyphen	BA, Break Opportunity After
᠆	U+1806	mongolian todo hyphen	BB, Break Opportunity Before: generally provide a line break opportunity before the character
‐	U+2010	hyphen	BA, Break Opportunity After
‑	U+2011	non-breaking hyphen	GL, Non-breaking (“Glue”): prohibit line breaks before or after
‒	U+2012	figure dash	BA, Break Opportunity After
–	U+2013	en dash	BA, Break Opportunity After
—	U+2014	em dash	B2, Break Opportunity Before and After
―	U+2015	horizontal bar	AL, Ordinary Alphabetic and Symbol Characters
⁓	U+2053	swung dash	AL, Ordinary Alphabetic and Symbol Characters
⁻	U+207B	superscript minus	AL, Ordinary Alphabetic and Symbol Characters
₋	U+208B	subscript minus	AL, Ordinary Alphabetic and Symbol Characters
−	U+2212	minus sign	PR, Prefix (Numeric): don’t break in front of a numeric expression
〜	U+301C	wave dash	NS, Non Starter: allow only indirect line break before
〰	U+3030	wavy dash	ID, Ideographic: break before or after
The descriptions of the line breaking property classes listed above are from Table 1 of the report. The exact meanings are specified by the more exact rules (partly formalized, partly in English) there. Specifically, the recommended rules include the following:

An em dash allows a line break before and after. Note that this also applies to a situation where an em dash is not surrounded by spaces—as in typical American English usage. However, a line break is not allowed between two em dashes. The report says that the reason for this is that pairs of em dashes are sometimes used instead of a single quotation dash.
The action of the non-breaking hyphen is to glue together both left and right neighbor character such that they are kept on the same line. However it allows a break before it if it follows a space (i.e. occurs at the start of a word). It “is the preferred character to use where words must be hyphenated but may not be broken at the hyphen”.
A minus sign may not be separated from following numeric characters or following opening characters, even if a space character intervenes.
Note however that the report also says: “Higher level protocols may further restrict, override, or extend the line breaking properties of certain characters in some contexts”. On the other hand, the quality of programs that do line division varies greatly, and the guidelines in the report should be regarded as proposed principles for future software rather than descriptions of current practice. A good formatting algorithm will not e.g. blindly split a word after a hyphen even if it results in a single character from the word to appear at the start of a line, as Internet Explorer does. Note that such behavior, which occurs in MS Word too, may affect expressions like “-s” (as in “the normal plural suffix in English is -s” too, so it would be safest to use nonbreaking hyphens in such cases, if sufficiently rich character repertoire can be used reliably.

MS Word specialties
Although all reasonably new versions of MS Word support Unicode, there are many peculiarities and oddities in the way it handles Unicode characters. In particular, Word has an Insert/Symbol function where you can insert a character either by picking it up from a table (pane “Symbols”) or by using a quick menu for some commonly used characters (pane “Special Characters”). Some entries in the latter are rather misleading.


Symbol insertion window in an old version of MS Word
In the “Special Characters” menu,

“Nonbreaking Hyphen” does not insert the Unicode character U+2011 non-breaking hyphen but instead internal information that tells Word to display a hyphen and not to break a line. This information is usually lost whenever the data is saved in any other format than Word’s own data format (e.g., as UTF-8 encoded plain text).
“Optional Hyphen” does not insert the Unicode character U+00AD soft hyphen. Instead, it inserts internal information that tells Word about a possible hyphenation point. This information, too, is usually lost when saving in other formats.
However, when saving data in HTML format, Word 2002 generates &#8209; from its internal “Nonbreaking Hyphen” and the U+00AD soft hyphen from its internal “Optional Hyphen”.

It is possible to insert U+2011 or U+00AD e.g. using the “Symbols” pane or, in sufficiently new systems, by typing 2011 Alt-x or ad Alt-x, respectively. The non-breaking hyphen U+2011 then works properly, assuming the font in use contains a glyph for it. The soft hyphen U+00AD however is displayed as a visible hyphen.

Typographic usage
When a sufficient character repertoire is available, the following usage rules are suitable, since they comply with old typographic and orthographic principles and the defined Unicode meanings of characters:

The hyphen-minus character should be used in computer languages and other contexts where this Ascii character belongs to the language syntax. Thus, for example, the C language statement a = b - c; must be written using the hyphen-minus character, despite the fact that it there denotes mathematical subtraction; the reason is that C language has been defined to use hyphen-minus as such an operator. Similar considerations apply to most programming, scripting, command, and markup languages, since they generally use Ascii characters only, at least in the core language.
In principle, according to the Unicode standard, the hyphen character should be used as a normal hyphen in natural languages. However, in practice, the hyphen-minus character is almost always used instead; even the Unicode standard does not use the hyphen character in its text. In most fonts, the glyph for hyphen (if present) is identical with the glyph for hyphen-minus and usually narrow (rather than “average width”).
The minus sign should be used as mathematical minus sign, both as a binary operator and as a unary operator (or simply as the sign of a number), as in 5 − 12 = −7 and in −10 °C.
The en dash is used to indicate a range of values, such as 2000–2500. However, as regards to use with SI of units, note that the Guide for the Use of the International System of Units (SI) “strongly recommends that the word ‘to’ be used to indicate a range of values for a quantity instead of a range dash (that is, a long hyphen) because the dash could be misinterpreted as a minus sign”. (It remains open what we should do when writing in a language that has no such preposition.) Also note that according to the ISO 8601 standard, time ranges should be expressed using a solidus (slash) as separator, e.g. 2000-01-01/05 means ‘1st to 5th of January 2000’.
The em dash can be used to make a break—like this—in the flow of a sentence, or to make a parenthetic remark.
Especially the en dash and em dash have language-dependent uses. The uses mentioned above (as taken from the Unicode standard) should primarily be taken as typical uses in American English. The detailed rules of their usage are obviously orthographic (and stylistic or typographic) rather than character code standard issues.

The Unicode standard mentions:

U+2013 en dash is used to indicate a range of values, such as 1973–1984. It should be distinguished from U+2212 minus, which is an arithmetic operator; however, typographers have typically used U+2013 en dash in typesetting to represent the minus sign. … In older mathematical typography, U+2014 em dash is also used to indicate a binary minus sign.
[Unicode, chapter 6]
One might conclude from this that if the minus sign cannot be used but the en dash is available (e.g., when the character repertoire is limited to the so-called Windows character set), the en dash is a better surrogate for the minus sign than the hyphen-minus or the em dash.

Hyphens and dashes: a closer look at English usage
Punctuation style varies according to language, style, and even authors’ personal preferences. The use of hyphens and dashes in literary American English seems to be relatively uniform however. The following description is mostly based on a detailed explicit presentation in a style manual [Webster], which seems to reflect the actual practices in high-quality printed publications rather well. However, note that some stylistic usages do not make a distinction between an em dash and an en dash. Simple punctuation rules [Oxford] might just refer to a dash in general. In fact, the situation has been described so that “both European and Anglo saxon typesetters do in fact separate words by close to a full em length in this situation, but the European style is to leave a bit of white space around the (shorter) dash while the Anglo saxon style is to cover the full em length with a correspondingly longer dash instead.” [Typographical]

Hyphen
Hyphens are basically used inside words to separate their parts from each other. This includes using it between the components of a compound word, often with variation so that the word might also be spelled without the hyphen or as two distinct words. Somewhat similar usage is the use of a hyphen to combine an abbreviation with a suffix, as in D.H.-ing or AA-er, though the apostrophe is more commonly used for such purposes.

An important and well-known use is at the end of a line, to mark that a word has been split. The basic spelling might have a hyphen in the same position; the difference between such a case and a hyphen introduced by a formatting algorithm is not indicated (visually or by the choice of the hyphen character), although the ISO 8859 standards can be interpreted as defining the difference between a normal hyphen-minus and a soft hyphen for such a purpose.

Other uses are more casual. A hyphen is, especially linguistics, used are to indicate that a sequence of letters is a prefix or suffix or otherwise part of a word rather than a word of its own, as in “the plural suffix -en is very rare in English”. Hyphens might also be used to indicate possible hyphenation points or syllable structure of a word, though there are many other notations for this in dictionaries. Very casually, hyphens can be used to indicate stuttering, sobbering, or halting speech, as in y-y-es, or to indicate a word spelled out letter by letter, e.g. p-h-l-e-g-m.

Finally, hyphens are often used as surrogates for other characters, such as en dash. However, this is caused by the insufficiency of the available character repertoire and does not belong to optimal orthography.

En dash
The en dash is used to indicate an interval of some sort. This might mean a range, as in “ages 10–15”, or a route, as in “Chicago–Memphis train”. Generally, the en dash thus means “to”.

Note that even if the real en dash character is used, confusion with the minus sign is possible, at least in principle, since the two characters look similar and there is no standard width for either of them. For such reasons, it has been recommended [SI Guide, section 7.7] that the word “to” be used instead when denoting numeric ranges, as in “0 V to 5 V” (instead of “0 V–5 V”). Obviously, in other languages other expressions need to be used. Note that not all languages have handy prepositions like “to”. One might consider using two or three dots or an ellipsis (e.g. 0 V…5 V), though then there might be confusion with the decimal point.

Various other usages are also known, such as using the en dash in expressions like “pre–Civil war” or “shock-wave–boundary-layer interaction”. In such usage, a hyphen would normally be used, but since a part of a compound phrase is itself hyphenated or consists of several words, some authors use an en dash instead, in the role of a hyphen with a “scope” different from normal. Some authors use the en dash for any compound attribute where the parts have equal weight; thus, they would use a hyphen for “big-boned woman” or “high-altitude test”, but they would use an en dash for “true–false test” or “question–answer format”. Such usages could be seen as conflicting with the normal distinction between a hyphen and an en dash, however. The same applies to the use of an en dash in place of a hyphen in all capital text [Caskill].

Em dash
The em dash is a multiple-use punctuation symbol, but it basically separates major parts of a statement, as opposite to the hyphen and the en dash, which have more “local”, separative functions.

The uses of the em dash can be classified as follows:

abrupt change—something unexpected follows after this punctuation character
abrupt termination, to indicate that the flow of speech ends unnaturally
parenthetic remark—like this—which might be seen as a special case of an abrupt change followed by a return (in a sense, an abrupt change too) to the main flow of thought
in enumerations, as alternative to a list bullet.
For parenthetic remarks, em dashes are common in literary usage, whereas scientific usage favors parentheses. It is also possible to use a style that distinguishes between different parenthetic remarks [Caskill]:

Commas (most frequently used) indicate only a slight separation in thought from the rest of the sentence.
Dashes emphasize the element enclosed and clarify meaning when the element contains internal commas.
Parentheses indicate that the enclosed element is only loosely connected to the rest of the sentence and therefore tend to de-emphasize it.
Sometimes “long dashes” are used: “a two em dash” might indicate missing letters in a word (or sometimes a missing word); whereas “a three em dash” might indicate that a word or phrase has been left out. The latter is often used in in biblio­graphies to indicate that a cited work is written by the same author(s) as the preceding entry. It is common to use two or three consecutive em dash characters (—— or ———). Note, however, that not all fonts implement the em dash in a manner that makes it join continuously with an adjacent em dash, as needed for a good use of the typo­graphic convention. For example, Times New Roman and Arial have “joining” em dash but Georgia does not. However, programs like web browsers may divide such a construct into two lines, even though Unicode line breaking rules explicitly forbid a line break between two em dashes. (In HTML authoring, you may consider using nobr markup around them, or some other method to prevent undesired line breaks.)

In Unicode version 6.1 (2012), the three-em dash character was added, together with two-em dash. (See discussion on 2-em and 3-em dashes in the Unicode mailing list in January 2010.) It typically takes many years before a character added to Unicode becomes generally available in fonts, and these characters are probably no exceptions.

References
[Caskill] Mary K. McCaskill: Grammar, Punctuation, and Capitalization; A Handbook for Technical Writers and Editors, NASA SP-7084. http://www.sti.nasa.gov/sp7084/contents.html.

[Oxford] Oxford Advanced Learner’s Dictionary, Fourth Edition, p. 1518, ISBN 0 19 431110 4.

[SI Guide] Guide for the Use of the International System of Units (SI). U.S. Commerce Departments Technology Administration, National Institute of Standards and Technology (NIST). URL: https://www.nist.gov/pml/special-publication-811 (accessed 2020-12-27).

[Typographical] Typographical measurement systems. By Jan Roland Eriksson. URL: http://home.swipnet.se/~w-20547/stylework/typograph1-en.html (archived).

[Unicode] The Unicode Standard. The Unicode Consortium. URL: http://www.unicode.org/versions/latest/. For information on reading the standard, see my Guide to the Unicode standard.

[Webster] Webster’s Style Manual, in p. 1323–1395 of Webster’s New Encyclopedic Dictionary, ISBN 0-9637056-0-1.

Date of creation: 2000-06-05. Last revision: 2011-11-29. Last modified 2012-02-27 and 2020-12-28.
This page belongs to section Characters and encodings of the free information site IT and communication by Jukka "Yucca" Korpela.