hexo.extend.filter.register('before_post_render', handler);
hexo.extend.filter.register('before_page_render', handler);  // 新增这行

function handler(data) {
  if (!data.cover) {
    const unique = (data.slug || data.title || '') + (data.date || '') + (data.path || '');
    let hash = 0;
    for (let i = 0; i < unique.length; i++) {
      hash = ((hash << 5) - hash) + unique.charCodeAt(i);
      hash |= 0;
    }
    data.cover = `https://wallpapers.gaoops.top/Lolita?seed=${Math.abs(hash)}`;
  }
  return data;
}