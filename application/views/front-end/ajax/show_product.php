<div class="e-con-inner">
    <div class="elementor-element elementor-element-9bff0dc e-con-full e-flex e-con e-child">
        <div class="elementor-element elementor-element-197a1e2 elementor-widget elementor-widget-jet-listing-grid">
            <div class="elementor-widget-container">
                <div class="jet-listing-grid jet-listing">
                    <div class="jet-listing-grid__items grid-col-desk-4 grid-col-tablet-3 grid-col-mobile-2 jet-listing-grid--685 jet-listing-grid__masonry grid-collapse-gap" style="position: relative;">
                    <?php foreach($datas as $item) {?>
                        <div class="jet-listing-grid__item jet-listing-dynamic-post-16835" >
                            <div class="elementor elementor-685">
                                <div  class="elementor-element elementor-element-5d344b0 e-flex e-con-boxed e-con e-parent e-lazyloaded">
                                    <div class="e-con-inner">
                                        <div class="elementor-element elementor-element-2aead0a elementor-widget elementor-widget-image">
                                            <div class="elementor-widget-container">
                                                <a href="/<?=$item['slug']?>">
                                                    <img
                                                        decoding="async"
                                                        width="500"
                                                        height="375"
                                                        src="/<?=$item['image_url']?>"
                                                        class="font-img-medium elementor-animation-grow attachment-medium size-medium wp-image-16840"
                                                        alt="<?=$item['name']?>"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="elementor-element elementor-element-c6965a1 e-con-full e-flex e-con e-child">
                                            <div class="elementor-element elementor-element-3c9e3ef title-font-archive elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-heading-title elementor-size-default">
                                                        <a href="/<?=$item['slug']?>"><?=$item['name']?></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  class="elementor-element elementor-element-b1b17ee span-font-archive elementor-widget elementor-widget-jet-listing-dynamic-field">
                                                <div class="elementor-widget-container">
                                                    <div class="jet-listing jet-listing-dynamic-field display-inline">
                                                        <div class="jet-listing-dynamic-field__inline-wrap">
                                                            <i class="jet-listing-dynamic-field__icon fas fa-user-tie" aria-hidden="true"></i>
                                                            <div class="jet-listing-dynamic-field__content">Tác giả: <?=$item['author']?></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-1951618 span-font-archive elementor-widget elementor-widget-jet-listing-dynamic-field" >
                                                <div class="elementor-widget-container">
                                                    <div class="jet-listing jet-listing-dynamic-field display-inline">
                                                        <div class="jet-listing-dynamic-field__inline-wrap">
                                                            <i class="jet-listing-dynamic-field__icon fas fa-user-edit" aria-hidden="true"></i>
                                                            <div class="jet-listing-dynamic-field__content">Việt hóa: <?=$item['vietnamization']?></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="elementor-element elementor-element-ae7fdda span-font-archive elementor-widget elementor-widget-jet-listing-dynamic-field"
                                                data-id="ae7fdda"
                                                data-element_type="widget"
                                                data-widget_type="jet-listing-dynamic-field.default"
                                            >
                                                <div class="elementor-widget-container">
                                                    <div class="jet-listing jet-listing-dynamic-field display-inline">
                                                        <div class="jet-listing-dynamic-field__inline-wrap">
                                                            <i class="jet-listing-dynamic-field__icon fas fa-user-check" aria-hidden="true"></i>
                                                            <div class="jet-listing-dynamic-field__content">Đăng bởi: <?=$item['posted_by']?></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-element elementor-element-9618ece e-con-full e-flex e-con e-child">
                                            <div class="elementor-element elementor-element-fae4294 elementor-widget elementor-widget-html" data-id="fae4294" data-element_type="widget" data-widget_type="html.default">
                                                <div class="elementor-widget-container">
                                                    <div class="popup-fc-wrapper">
                                                        <!-- Nút kích hoạt popup mới với nhãn khác và lớp CSS riêng -->
                                                        <button id="button-linktai-listing" class="open-popup-fc" data-post-id="<?=$item['post_id']?>">
                                                            <svg aria-hidden="true" class="e-font-icon-svg e-fas-random" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"
                                                                ></path>
                                                            </svg>
                                                            Download Font
                                                        </button>
                                                        <!-- Popup overlay chứa nội dung -->
                                                        <div class="popup-fc-container" style="display: none;">
                                                            <div class="popup-fc-content">
                                                                <span class="close-popup-fc">×</span>
                                                                <div class="popup-fc-inner">
                                                                    <div class="popup-fc-inner">
                                                                        <div class="download-buttons-popup">
                                                                            <a href="<?=$item['dowload_link']?>" rel="nofollow">
                                                                                <button class="download-button" id="button-linktai">
                                                                                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-cloud-download-alt" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path>
                                                                                    </svg>
                                                                                    Link tải chính thức
                                                                                </button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
                    
                </div>
            </div>
        </div>
        <div
            class="elementor-element elementor-element-cf69ba9 elementor-widget elementor-widget-jet-smart-filters-pagination"
            data-id="cf69ba9"
            data-element_type="widget"
            data-widget_type="jet-smart-filters-pagination.default"
        >
            <div class="elementor-widget-container">
                <div class="jet-smart-filters-pagination jet-filter">
                    <div class="jet-filters-pagination">
                        <?php foreach ($pagesToShow as $p): ?>
                            <?php if ($p === '...'): ?>
                                <div class="jet-filters-pagination__item" tabindex="0" data-value="0"><div class="jet-filters-pagination__link">...</div></div>
                            <?php else: ?>
                                <div class="jet-filters-pagination__item <?= ($p == $page) ? 'jet-filters-pagination__current' : '' ?>" tabindex="0" data-value="<?=$p?>"><div class="jet-filters-pagination__link"><?=$p?></div></div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                        <?php if(!empty($pagesToShow)): ?>
                        <div class="jet-filters-pagination__item prev-next next" tabindex="0" data-value="next" data-value="<?= ($page == $totalPage) ? $totalPage : $page+1 ?>"><div class="jet-filters-pagination__link">Next</div></div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-element elementor-element-8c8998b elementor-widget elementor-widget-jet-listing-dynamic-field" data-id="8c8998b" data-element_type="widget" data-widget_type="jet-listing-dynamic-field.default">
            <div class="elementor-widget-container">
                <div class="jet-listing jet-listing-dynamic-field display-inline">
                    <div class="jet-listing-dynamic-field__inline-wrap">
                        <div class="jet-listing-dynamic-field__content">
                            <strong>Ghi chú: </strong> Tất cả các Font này được thành viên của Font Chuẩn đăng tải, hoặc Nhóm Font Chuẩn tự Việt Hóa. Chỉ sử dụng cho mục đích cá nhân hoặc học tập, nếu dùng cho mục đích
                            thương mại bạn nên mua bản quyền để tôn trọng và ủng hộ tác giả và các nhóm việt hóa.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>