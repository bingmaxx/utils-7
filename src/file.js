/**
 * a 标签下载功能
 * @param {String} data 下载内容, URL || blob: URL || data: URL(base64)
 * @param {String} name 下载后的文件名称
 */
export const download = ({ data, name }) => {
  const eleLink = document.createElement('a');
  eleLink.download = name || new Date().getTime();
  eleLink.style.display = 'none';
  eleLink.href = data;

  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
};

/**
 * 下载 blob 文件
 * @param {String} data 下载内容，string || blob
 * @param {String} name 下载后的文件名称
 */
export const downloadBlob = ({ data, name }) => {
  const blob = typeof data === 'string' ? new Blob([data]) : data;

  const value = URL.createObjectURL(blob);
  download({ data: value, name });
};