const { createElement } = wp.element;
const { InnerBlocks } = wp.editor;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType( 'imath/section', {
    title: __( 'Section', 'imath-section' ),

    description: __( 'Une section pour y mettre des blocks.', 'imath-section' ),

    icon: function() {
        return (
            <svg
                role="img"
                className="dashicon section-frame"
                focusable="false"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="https://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M217,410 L217,408 L221,408 L221,410 L217,410 Z M225,410 L225,408 L229,408 L229,410 L225,410 Z M233,410 L233,408 L237,408 L237,410 L233,410 Z M238,412 L240,412 L240,416 L238,416 L238,412 Z M238,420 L240,420 L240,424 L238,424 L238,420 Z M238,428 L240,428 L240,432 L238,432 L238,428 Z M235,430 L235,432 L231,432 L231,430 L235,430 Z M227,430 L227,432 L223,432 L223,430 L227,430 Z M218,430 L220,430 L220,432 L216,432 L216,428 L218,428 L218,430 Z M218,425 L216,425 L216,421 L218,421 L218,425 Z M218,417 L216,417 L216,413 L218,413 L218,417 Z"
                    transform="translate(-216 -408)"
                />
            </svg>
        );
    },

    category: 'layout',

    edit: function() {
        return (
            <section className="imath-section">
                <InnerBlocks />
            </section>
        )
    },

    save: function() {
        return (
            <section className="imath-section">
                <InnerBlocks.Content />
            </section>
        );
    }
} );
