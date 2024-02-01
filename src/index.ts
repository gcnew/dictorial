
import * as fs from 'fs';

type WordLine = {
    word: string,
    meaning: {
        tags: string[],
        definition: string,
        example: string[]
    }[]
}

function main() {
    const contents = trai(() => fs.readFileSync(process.argv[2], 'utf8'));
    if (!contents) {
        console.error('Syntax: shuffler <dict-file>');
        process.exit(1);
    }

    const preview = contents.trim().split('\n').slice(0, 5).join('\n');
    console.log(preview);
}

function parseWordLog(contents: string): WordLine[] {
    return null!;
}

function trai<T>(f: () => T): T | undefined {
    try {
        return f();
    } catch (o_O) {
        return undefined;
    }
}

main();
