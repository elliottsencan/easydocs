const getCoveragePercentage = (actualCount, expectedCount) =>
  ((actualCount / expectedCount) * 100) || 0;

const functionDeclarationHandler = (results, currentNode, type, required) => {
  const needsComment = required.includes(type);
  const hasComment = "leadingComments" in currentNode;
  if (needsComment) {
    results.expectedResult++;
  }

  if (needsComment && hasComment) {
    results.actualResult++;
  }

  if (needsComment && !hasComment) {
    const functionName = currentNode.id.name;
    results.undocumented[functionName] = {
      start: currentNode.loc.start.line,
      end: currentNode.loc.end.line,
    };
  }

  return results;
};

const nodeTypeHandlers = {
  FunctionDeclaration: functionDeclarationHandler,
};

const generateCoverageReportHashFromAst = (ast, config) => {
  const body = ast.program.body;
  const { coverage } = config;
  const { required } = coverage;
  const results = { expectedResult: 0, actualResult: 0, undocumented: {} };

  const report = body.reduce((results, currentNode) => {
    const { type } = currentNode;
    const handler = nodeTypeHandlers[type];
    if (handler) {
      return handler(results, currentNode, type, required);
    }

    return results;
  }, results);

  return {
    coveragePercentage: getCoveragePercentage(
      report.actualResult,
      report.expectedResult
    ),
    report,
  };
};

export default generateCoverageReportHashFromAst;
