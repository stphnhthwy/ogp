import { test, expect } from '@playwright/test';
import { generateMinimalHtml } from '../src/lib/generateHtml';

test('escapes HTML special chars', () => {
  const html = generateMinimalHtml({
    title: '<script>',
    description: 'Fish & Chips',
    url: 'https://example.com/?q="test"&x=<x>',
    images: [],
  });
  expect(html).toContain('&lt;script&gt;');
  expect(html).toContain('Fish &amp; Chips');
  expect(html).toContain('https://example.com/?q=&quot;test&quot;&amp;x=&lt;x&gt;');
});
