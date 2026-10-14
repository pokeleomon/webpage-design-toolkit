import fs from 'node:fs';
import path from 'node:path';

/**
 * Validate the webpage-design-kit skeleton structure.
 * @param {string} rootDir - Kit root directory (relative or absolute).
 * @returns {{ errors: string[] }} Missing-item strings, empty when complete.
 */
export function validateKit(rootDir) {
  const errors = [];
  const root = path.isAbsolute(rootDir)
    ? rootDir
    : path.resolve(process.cwd(), rootDir);

  const skillPath = path.join(root, 'skills', 'webpage-design', 'SKILL.md');
  if (!fs.existsSync(skillPath)) {
    errors.push('missing skills/webpage-design/SKILL.md');
  } else {
    const md = fs.readFileSync(skillPath, 'utf8');
    if (!md.includes('name: webpage-design')) {
      errors.push('SKILL.md missing frontmatter "name: webpage-design"');
    }
    if (!md.includes('description:')) {
      errors.push('SKILL.md missing frontmatter "description:"');
    }
  }

  if (!fs.existsSync(path.join(root, 'README.md'))) {
    errors.push('missing README.md');
  }

  const licensePath = path.join(root, 'LICENSE');
  if (!fs.existsSync(licensePath)) {
    errors.push('missing LICENSE');
  } else {
    const text = fs.readFileSync(licensePath, 'utf8');
    if (!text.includes('MIT')) {
      errors.push('LICENSE is not MIT');
    }
  }

  if (!fs.existsSync(path.join(root, 'ATTRIBUTION.md'))) {
    errors.push('missing ATTRIBUTION.md');
  }

  const pluginPath = path.join(root, '.claude-plugin', 'plugin.json');
  if (!fs.existsSync(pluginPath)) {
    errors.push('missing .claude-plugin/plugin.json');
  } else {
    let plugin;
    try {
      plugin = JSON.parse(fs.readFileSync(pluginPath, 'utf8'));
    } catch {
      errors.push('.claude-plugin/plugin.json is not valid JSON');
    }
    if (plugin !== undefined) {
      const skills = plugin.skills;
      if (!Array.isArray(skills) || !skills.includes('./skills/webpage-design')) {
        errors.push('.claude-plugin/plugin.json missing skills: ["./skills/webpage-design"]');
      }
    }
  }

  return { errors };
}
