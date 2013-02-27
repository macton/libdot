libdot
======
Author: Robert Ginda <rginda@google.com>

There's not much in libdot that already exists.  Not enough to justify an external dependency, at least.  Here's the rundown...

    lib.js (150 lines)                    - "var lib = {}" is the important part, followed by lib.registerInit() and lib.init().  The rtdep method is useful but hterm would still function if it were a no - op.
    lib_colors.js (1k lines)              - The bulk of this file is color palettes.  The rest is a few simple utility functions
    lib_f.js (280 lines)                  - Mostly trivial utility functions, plus a few that I've been carrying around for a decade or more.
    lib_fs.js (280 lines)                 - HTML5 filesystem wrapper.  I don't think we'll find many implementations of this, since Chrome is the only browser that implements this API so far.
    lib_message_manager.js (200 lines)    - Fairly trivial i18n message management that happens to work with Chrome's oddball message blobs.
    lib_preference_manager.js (700 lines) - A preference manager pattern I've been using for the last decade, upgraded to work with localStorage and Chrome's sync storage APIs.
    lib_storage_local.js                  - Storage adaptor for lib_storage.js.
    lib_storage_memory.js                 - Storage adaptor for lib_storage.js.
    lib_test_manager.js (1k lines)        - A basic test manager that supports async tests and can be driven from the js console.
    lib_utf8.js (155 lines)               - Simple utf8 encoder/decoder.

I don't see much in that list that I can take off the shelf.  I'd need to see a patch showing some real advantages before considering a third party dependency.

(Also, fwiw, there's a few more libdot files in the pipeline, mostly of the "I've been using a library like this for a very long time and like it" variety.)

As far as making it more general and reusable, well, that's the idea.  That's why I split these hterm specific files out into a common directory.  I do intend to reuse libdot in my own Chrome apps projects, and would encourage a few others to try the same.  If it starts running under its own power at some point then great.  If not, hterm will still work.
